import Vue from 'vue';
import Router from 'vue-router';
import { isLogin } from './utils/auth';
import store from './store';
Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    meta: { auth: true },
    component: resolve => require(['./views/main'], resolve),
    children: [{
      path: '/',
      meta: { nav: 'home', side: 'index' },
      component: resolve => require(['./views/home/index'], resolve)
    }, {
      path: '/table',
      meta: { nav: 'home', side: 'table' },
      component: resolve => require(['./views/home/table'], resolve)
    }, {
      path: '/user/list',
      meta: { nav: 'user', side: 'list' },
      component: resolve => require(['./views/user/list'], resolve)
    }
  ]}, {
    path: '/login',
    meta: { auth: false },
    component: resolve => require(['./views/login/index'], resolve)
  }, {
    path: '*',
    component: resolve => require(['./views/error/index'], resolve)
}]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!isLogin()) {
      next({path: '/login'});
    } else {
      store.dispatch('setNavbar', to.meta);
      next();
    }
  }
  next();
});
export default router;