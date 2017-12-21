import Vue from 'vue';
import Router from 'vue-router';
import { isLogin } from './utils/auth';
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
  if (to.matched.some(record => record.meta.auth)) {
    if (!isLogin()) {
      next({path: '/login'});
    } else {
      next();
    }
  }
  next();
});
export default router;