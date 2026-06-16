from math import cos, pi, sin
from pathlib import Path

from PIL import Image, ImageDraw


OUT = Path("/tmp/aigen2")
BLUE = (0x15, 0x65, 0xC0, 255)
TRANSPARENT = (0, 0, 0, 0)
S = 4
SIZE = 256
W = SIZE * S


def sc(v):
    if isinstance(v, tuple):
        return tuple(int(round(x * S)) for x in v)
    return int(round(v * S))


def canvas():
    return Image.new("RGBA", (W, W), TRANSPARENT)


def save(img, name):
    img = img.resize((SIZE, SIZE), Image.Resampling.LANCZOS)
    img.save(OUT / name)


def draw_rounded_line(draw, points, width, fill=BLUE):
    pts = [sc(p) for p in points]
    draw.line(pts, fill=fill, width=sc(width), joint="curve")
    r = sc(width) // 2
    for x, y in pts:
        draw.ellipse((x - r, y - r, x + r, y + r), fill=fill)


def h_chart():
    img = canvas()
    d = ImageDraw.Draw(img)
    for xy in [(52, 142, 84, 198), (105, 112, 137, 198), (158, 78, 190, 198)]:
        d.rounded_rectangle(sc(xy), radius=sc(10), fill=BLUE)
    draw_rounded_line(d, [(48, 102), (92, 124), (132, 86), (194, 54)], 16)
    d.polygon([sc((190, 38)), sc((220, 48)), sc((204, 76))], fill=BLUE)
    save(img, "h-chart.png")


def h_rocket():
    img = canvas()
    d = ImageDraw.Draw(img)
    d.polygon([sc((127, 30)), sc((158, 78)), sc((150, 154)), sc((127, 184)), sc((104, 154)), sc((96, 78))], fill=BLUE)
    d.ellipse(sc((107, 74, 147, 114)), fill=TRANSPARENT)
    d.ellipse(sc((117, 84, 137, 104)), fill=BLUE)
    d.polygon([sc((99, 127)), sc((59, 159)), sc((97, 166))], fill=BLUE)
    d.polygon([sc((155, 127)), sc((197, 159)), sc((157, 166))], fill=BLUE)
    d.polygon([sc((113, 176)), sc((127, 228)), sc((141, 176))], fill=BLUE)
    d.polygon([sc((104, 184)), sc((83, 218)), sc((116, 202))], fill=BLUE)
    d.polygon([sc((150, 184)), sc((171, 218)), sc((138, 202))], fill=BLUE)
    save(img, "h-rocket.png")


def h_sparkle():
    img = canvas()
    d = ImageDraw.Draw(img)
    d.polygon([sc((128, 25)), sc((153, 101)), sc((231, 128)), sc((153, 155)), sc((128, 231)), sc((103, 155)), sc((25, 128)), sc((103, 101))], fill=BLUE)
    d.polygon([sc((128, 82)), sc((140, 116)), sc((174, 128)), sc((140, 140)), sc((128, 174)), sc((116, 140)), sc((82, 128)), sc((116, 116))], fill=TRANSPARENT)
    save(img, "h-sparkle.png")


def h_gear():
    img = canvas()
    d = ImageDraw.Draw(img)
    pts = []
    for i in range(24):
        a = -pi / 2 + i * pi / 12
        r = 94 if i % 2 == 0 else 75
        pts.append(sc((128 + cos(a) * r, 128 + sin(a) * r)))
    d.polygon(pts, fill=BLUE)
    d.ellipse(sc((70, 70, 186, 186)), fill=BLUE)
    d.ellipse(sc((103, 103, 153, 153)), fill=TRANSPARENT)
    save(img, "h-gear.png")


def h_building():
    img = canvas()
    d = ImageDraw.Draw(img)
    d.polygon([sc((37, 86)), sc((128, 35)), sc((219, 86))], fill=BLUE)
    d.rounded_rectangle(sc((48, 91, 208, 108)), radius=sc(4), fill=BLUE)
    for x in [59, 101, 143, 185]:
        d.rounded_rectangle(sc((x, 121, x + 18, 185)), radius=sc(5), fill=BLUE)
    d.rounded_rectangle(sc((44, 194, 212, 211)), radius=sc(5), fill=BLUE)
    d.rounded_rectangle(sc((30, 219, 226, 237)), radius=sc(5), fill=BLUE)
    save(img, "h-building.png")


def h_search():
    img = canvas()
    d = ImageDraw.Draw(img)
    d.ellipse(sc((47, 43, 157, 153)), outline=BLUE, width=sc(19))
    draw_rounded_line(d, [(145, 145), (211, 211)], 22)
    save(img, "h-search.png")


def h_link():
    img = canvas()
    temp = canvas()
    td = ImageDraw.Draw(temp)
    td.rounded_rectangle(sc((36, 93, 142, 163)), radius=sc(35), outline=BLUE, width=sc(20))
    td.rounded_rectangle(sc((114, 93, 220, 163)), radius=sc(35), outline=BLUE, width=sc(20))
    td.rounded_rectangle(sc((94, 96, 162, 160)), radius=sc(28), fill=TRANSPARENT)
    temp = temp.rotate(-34, resample=Image.Resampling.BICUBIC, center=(W // 2, W // 2))
    img.alpha_composite(temp)
    save(img, "h-link.png")


def h_paperclip():
    img = canvas()
    temp = canvas()
    td = ImageDraw.Draw(temp)
    td.rounded_rectangle(sc((74, 29, 165, 210)), radius=sc(45), outline=BLUE, width=sc(18))
    td.rounded_rectangle(sc((104, 62, 137, 174)), radius=sc(17), outline=BLUE, width=sc(18))
    td.rectangle(sc((74, 29, 119, 76)), fill=TRANSPARENT)
    temp = temp.rotate(32, resample=Image.Resampling.BICUBIC, center=(W // 2, W // 2))
    img.alpha_composite(temp)
    save(img, "h-paperclip.png")


def h_coffee():
    img = canvas()
    d = ImageDraw.Draw(img)
    d.rounded_rectangle(sc((51, 86, 166, 177)), radius=sc(18), outline=BLUE, width=sc(19))
    d.rectangle(sc((52, 80, 167, 116)), fill=TRANSPARENT)
    d.rounded_rectangle(sc((159, 108, 211, 157)), radius=sc(25), outline=BLUE, width=sc(17))
    d.rectangle(sc((152, 98, 181, 167)), fill=TRANSPARENT)
    draw_rounded_line(d, [(43, 202), (208, 202)], 20)
    draw_rounded_line(d, [(75, 223), (176, 223)], 14)
    save(img, "h-coffee.png")


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    h_chart()
    h_rocket()
    h_sparkle()
    h_gear()
    h_building()
    h_search()
    h_link()
    h_paperclip()
    h_coffee()


if __name__ == "__main__":
    main()
