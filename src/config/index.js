const dev = {
    apiRoot: 'http://backend.api.shushujia.net'
};
const prod = {
    apiRoot: 'http://backend.api.shushujia.me'
};
console.log(process.env.NODE_ENV);
export default {
  env: process.env.NODE_ENV === 'production' ? prod : dev
};