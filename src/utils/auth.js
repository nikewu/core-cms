import fetch from '../api/fetch';
import md5 from '../libs/md5.js';
import store from '../store';
const auth = {
    login({username, password, ismd5 = false}) {
        return new Promise((resolve, reject) => {
            fetch.post('/user/login', {
                params: {
                    username: username,
                    password: ismd5 ? password : md5(password)
                }
            }).then(json => {
                // 用户名 职位 token
                store.dispatch('signin', json.data);
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    },
    isLogin() {
        return Boolean(store.state.user.username);
    }
};
export default auth;
