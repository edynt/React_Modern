const fs = require('node:fs/promises');

async function getStoredPosts() {
  const rawFileContent = await fs.readFile('posts.json', { encoding: 'utf-8' });
  if (rawFileContent) {
    const data = JSON.parse(rawFileContent);
    return data.posts;
  }

  return [];
}

function storePosts(posts) {
  return fs.writeFile('posts.json', JSON.stringify({ posts: posts || [] }));
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;
