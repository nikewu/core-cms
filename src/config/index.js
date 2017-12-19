const dev = {
    apiRoot: 'http://xxxx'
};
const prod = {
    apiRoot: 'http://xxxx'
};
console.log(process.env.NODE_ENV);
export default {
  env: process.env.NODE_ENV === 'production' ? prod : dev
};