const dev = {
    apiRoot: 'http://xxxx',
    CookieDomain: 'http://localhost:11803/'
};
const prod = {
    apiRoot: 'http://xxxx',
    CookieDomain: 'xxxxxxxxx'
};
console.log(process.env.NODE_ENV);
export default {
  env: process.env.NODE_ENV === 'production' ? prod : dev
};