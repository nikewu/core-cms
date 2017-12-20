import Vue from 'vue';
import Router from 'vue-router';
import auth from './utils/auth';
Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    meta: { auth: true },
    component: resolve => require(['./views/main'], resolve),
    children: [{
      path: '/',
      meta: { nav: 'home|index' },
      component: resolve => require(['./views/home/index'], resolve)
    }]
  }, {
    path: '/login',
    meta: { auth: false },
    component: resolve => require(['./views/login/index'], resolve)
  }]
});
router.beforeEach((to, from, next) => {
  // const menu = to.meta.nav ? to.meta.nav.split('|')[0] : '';
  // var { auth = true } = to.meta;
  if (to.matched.some(record => record.meta.auth)) {
    if (!auth.isLogin()) {
      next({path: '/login'});
    } else {
      next();
    }
  }
  next();
});
export default router;