import pandas as pd
articles = pd.read_csv("articles.tsv", sep="\t", header=0)


html_escape_table = {
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;",
    ">": "&gt;",
    "<": "&lt;",
}


def html_escape(text):
    """Produce entities within text."""
    return "".join(html_escape_table.get(c, c) for c in text)



import os

for row, item in articles.iterrows():
    md_filename = str(item.pub_date) + "-" + item.slug + ".md"
    html_filename = str(item.pub_date) + "-" + item.slug
    year = item.pub_date[:4]
    md = "---\ntitle: \"" + item.title + '"\n'

    md += """collection: publication\npermalink: /publication/""" + html_filename
    md += "\nexcerpt: '<i>Published in " + item.venue + ", " + str(year) + "</i><br/>" + html_escape(item.summary) + "'"
    md += "\ndate: " + str(item.pub_date)
    md += "\nvenue: '" + html_escape(item.venue) + "'"
    md += "\npaperurl: '" + item.url + "'"
    md += "\ncitation: '" + html_escape(item.citation) + "'"
    md += "\n---"
    md += "\n\n<a href='" + item.url + "'>Download PDF here</a>\n"
    md += "\nAbstract: " + html_escape(item.description) + "\n"
    md += "\n Recommended citation: " + item.citation
    md_filename = os.path.basename(md_filename)
    with open(md_filename, 'w') as f:
        f.write(md)
