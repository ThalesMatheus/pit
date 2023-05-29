import axios from 'axios';
import { parseCookies } from 'nookies';

const {'user.auth_cookie': token } = parseCookies()

export const api = axios.create({
    baseURL: 'http://localhost/'
})

if (token) 
{
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}