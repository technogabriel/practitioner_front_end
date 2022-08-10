import { authorization } from '../auth/Authorization.js';
import { BlogPostModel } from '../models/BlogPostModel.js';

import { baseUrl, jsonToBlob } from './utils.js';

export async function getPosts() {
  const response = await fetch(`${baseUrl}/posts`);
  return (await response.json()).map(postData => new BlogPostModel(postData));
}

export async function updatedPost(postId, fieldsToUpdate) {
  const token = await authorization.getToken();

  const response = await fetch(`${baseUrl}/posts/${postId}`, {
    method: 'PUT',
    body: jsonToBlob(fieldsToUpdate),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return new BlogPostModel(await response.json());
}
