import Cookies from 'universal-cookie';
import env from '../config';
const cookies = new Cookies();
let cookieConfig = {};
if (env.CookieDomain !== '') {
    cookieConfig = { domain: env.CookieDomain, maxAge: 60 * 60 };// path:'/',
}
export function saveCookie(name, value) {
    cookies.remove(name, cookieConfig);
    cookies.set(name, value, cookieConfig);
}
export function getCookie(name) {
    return cookies.get(name);
}
export function signOut() {
    cookies.remove('token', cookieConfig);
}
export function isLogin() {
    return Boolean(cookies.get('token'));
}
