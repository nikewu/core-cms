// import fetch from '../api/fetch';
import { getCookie, saveCookie, signOut } from '../utils/auth';
import router from '../router';
export default {
  state: {
    token: getCookie('token') || null,
    user: getCookie('user') || null
  },
  getters: {
    roleType: state => {
      const roleArray = ['NULL', 'ADMIN', 'MERCHANT', 'SHIPPER'];
      if (state.user) {
        return roleArray[state.user.role];
      }
      return null;
    }
  },
  mutations: {
    loginIn(state, user) {
      const json = {
        data: {
          user: {
            nikename: 'hyz',
            role: 1
          },
          token: 'xxxxxxxxx'
        },
        ok: true
      };
      state.token = json.data.token;
      state.user = json.data.user;
      saveCookie('token', state.token);
      saveCookie('user', state.user);
      router.push({path: '/'});
      // return new Promise((resolve, reject) => {
      //   fetch.get('/sysUsers/login/', {
      //     params: {
      //       username: user.username,
      //       password: user.password
      //     }
      //   }).then(json => {
      //     if (!json.ok) {
      //       // return showMsg(store,response.data.error_msg || '登录失败')
      //     }
      //     state.token = json.data.token;
      //     state.user = json.data.user;
      //     saveCookie('token', state.token);
      //     saveCookie('user', state.user);
      //     router.push({path: '/'});
      //   }).catch(err => {
      //    console.log(err);
      //   //  showMsg(store,response.data.error_msg || '登录失败')
      //   });
      // });
    },
    loginOut(state) {
      state.user = null;
      state.token = null;
    }
  },
  actions: {
   loginIn({ commit }, user) {
      commit('loginIn', user);
    },
   loginOut({ commit }) {
      signOut();
      commit('loginOut');
      window.location.pathname = '/';
    }
  }
};