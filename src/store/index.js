import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import navbar from './navbar';
import loading from './loading';
import createLogger from 'vuex/dist/logger';
const debug = process.env.NODE_ENV !== 'production';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
      user,
      navbar,
      loading
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
