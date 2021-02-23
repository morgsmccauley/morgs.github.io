import fs from 'fs';
import { join } from 'path';
import marked from 'marked'
import matter from 'gray-matter';
import { highlight } from 'highlight.js'

const POSTS_DIR = `${process.cwd()}/posts`;

marked.setOptions({
  highlight(code, lang) {
    return highlight(lang, code).value;
  },
  langPrefix: 'hljs lang-',
});

const getPostFiles = () =>
  fs.readdirSync(POSTS_DIR);

export const getPostSlugs = () =>
  getPostFiles().map((name) => name.replace(/.md$/, ''));

export const getPostDataBySlug = (slug: string) => {
  const fileContent = fs.readFileSync(join(POSTS_DIR, `${slug}.md`), 'utf8');
  const { data, content } = matter(fileContent);
  // type should be somewhere shared
  const { title, description, date } = data;

  return {
    date,
    title,
    description,
    slug,
    html: marked(content),
  };
};

export const getAllPostData = () =>
  getPostSlugs().map(getPostDataBySlug);
