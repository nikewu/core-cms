import Vue from 'vue';

export default {
  state: JSON.parse(sessionStorage.getItem('user')) || {},
  getters: {
    roleType: state => {
      const roleArray = ['NULL', 'ADMIN', 'MERCHANT', 'SHIPPER'];
      return roleArray[state.role];
    }
  },
  mutations: {
    signin(state, user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      Object.keys(user).forEach(k => Vue.set(state, k, user[k]));
    },
    signout(state) {
      sessionStorage.removeItem('user');
      Object.keys(state).forEach(k => Vue.delete(state, k));
    }
  },
  actions: {
    signin({ commit }, user) {
      commit('signin', user);
    },
    signout({ commit }) {
      commit('signout');
    }
  }
};