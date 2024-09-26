import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

// Function to get blog post content from markdown file
export async function getPost(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');

  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    mdxSource,
    frontMatter: data,
  };
}
