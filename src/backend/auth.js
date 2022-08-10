import { baseUrl, jsonToBlob } from './utils.js';

export async function login(username, password) {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    body: jsonToBlob({ username, password }),
  });
  if (response.status === 201) {
    const responseData = await response.json();
    return responseData.access_token;
  }
  if (response.status === 401) {
    alert('Usuario o contraseña incorrectos');
  }
  throw Error('Error when trying to login');
}
