import argparse
import os
from datetime import datetime

# Function to create a new blog post
def create_blog_post(title, content):
    # Generate filename based on title and current date
    date_str = datetime.now().strftime("%Y-%m-%d")
    filename = f"{date_str}-{title.lower().replace(' ', '-')}.md"

    # Write content to file
    with open(os.path.join("./src/blog", filename), "w") as f:
        f.write("---\n")
        f.write(f"date: {date_str}\n")
        f.write("draft: true\n")
        f.write(f"title: {title}\n")
        f.write(f"url: /blog/{filename.replace('.md', '')}\n")
        f.write("---\n\n")
        f.write("[comment]: <> (THIS FILE WAS AUTO-GENERATED)")
        f.write(content)

    print(f"Blog post created: {filename}")

def main():
    parser = argparse.ArgumentParser(description="11ty Blog Content Generator")
    parser.add_argument("title", help="Title of the blog post")
    parser.add_argument("--content", help="Content of the blog post", default="", nargs='?')

    args = parser.parse_args()

    create_blog_post(args.title, args.content)

if __name__ == "__main__":
    main()
