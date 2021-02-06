import fs from 'fs';
import marked from 'marked'

const POSTS_DIR = `${process.cwd()}/posts`;

const getPostFiles = () =>
  fs.readdirSync(POSTS_DIR);

export const getPostSlugs = () =>
  getPostFiles().map((name) => name.replace('.md', ''));

export const getPostBySlug = (slug: string) => ({
  title: slug.replace(/-/g, ' '),
  html: marked(fs.readFileSync(`${POSTS_DIR}/${slug}.md`, 'utf-8')),
});
