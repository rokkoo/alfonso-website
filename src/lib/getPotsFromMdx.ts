import { promises as fs } from 'fs';
import path from 'path';

export const getPostsFromMdx = async () => {
  const postDirectory = path.join(process.cwd(), 'pages/posts');
  const postFilenames = await fs.readdir(postDirectory);

  const postModules = await Promise.all(
    postFilenames.map(async (p) => import(`../../pages/posts/${p}`))
  );

  const postMetadata = postModules.map((m) => m.metadata);

  return postMetadata;
};
