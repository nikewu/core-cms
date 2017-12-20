import axios from 'axios';
import qs from 'qs';
import config from '../config';

const instance = axios.create();

instance.defaults.timeout = 8000;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; // 配置请求头
instance.defaults.baseURL = config.env.apiRoot;

/**
 * 过滤空参数
 */
instance.defaults.paramsSerializer = function(params) {
    const keys = Object.keys(params);
    const _ret = {};
    for (const key of keys) {
      if (typeof params[key] === 'undefined' || params[key] === null || params[key] === '') {
        continue;
      } else {
        _ret[key] = params[key];
      }
    }
    // 转化 qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' }) 'a=b&a=c'
    let ret = qs.stringify(_ret, { arrayFormat: 'repeat' });
    return ret;
  };

 /**
 * 错误统一处理
 */
instance.interceptors.response.use(response => {
    if (response.data.ok || response.data.code === 0) {
      return response.data;
    }
    const err = new Error(response.data.errMsg);
    err.response = response;
    return Promise.reject(err);
  }, error => {
    return Promise.reject(error);
  });
  export default instance;