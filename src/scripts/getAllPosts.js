import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHTML from 'remark-html';

export function getAllPosts() {
  const allPostsFileName = fs.readdirSync('./_posts');

  const posts = allPostsFileName.map((fileName) => {
    const fileContent = fs.readFileSync(`./_posts/${fileName}`, 'utf-8');

    const { content, data: metadata } = grayMatter(fileContent);

    const htmlContent = remark()
      .use(remarkHTML)
      .processSync(content)
      .toString();

    return {
      metadata: {
        ...metadata,
        slug: fileName.replace('.md', ''),
      },
      content: htmlContent,
    };
  });

  return posts;
}
