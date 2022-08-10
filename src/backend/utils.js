export const baseUrl = 'https://practitioner-blog-app-backend.herokuapp.com';

export const jsonToBlob = json =>
  new Blob([JSON.stringify(json)], { type: 'application/json' });
