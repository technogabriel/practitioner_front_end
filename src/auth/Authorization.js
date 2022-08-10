/* eslint-disable class-methods-use-this */
import { login } from '../backend/auth.js';

export class Authorization {
  async login(username, password) {
    const token = await login(username, password);
    localStorage.setItem('accessToken', token);
  }

  isLoggedIn() {
    return localStorage.getItem('accessToken') !== null;
  }

  async getToken() {
    return localStorage.getItem('accessToken');
  }
}

export const authorization = new Authorization();
