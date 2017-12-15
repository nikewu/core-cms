import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    meta: { auth: true },
    component: resolve => require(['../views/main'], resolve),
    children: [{
      path: '/',
      meta: { nav: 'home|index' },
      component: resolve => require(['../views/home/index'], resolve)
    }]
  }, {
    path: '/login',
    meta: { auth: false },
    component: resolve => require(['../views/login'], resolve)
  }]
});
// router.beforeEach((to, from, next) => {
//   const menu = to.meta.nav ? to.meta.nav.split('|')[0] : '';
//   var { auth = true } = to.meta;
//   if (to.query.qwe && to.query.dsfd) {
//     sysuser.login({ username: to.query.qwe, password: to.query.dsfd, ismd5: true }).then(json => {
//       store.dispatch('signin', json.data);
//       uikit.store.dispatch('selectMenu', to.meta.nav || 'null|null');
//       next();
//     }).catch(() => {
//       const isLogin = Boolean(store.state.user.username); // true用户已登录， false用户未登录
//       if (auth && !isLogin && to.path !== '/login') {
//         return next({ path: '/login' });
//       } else if (process.isLocal) {
//         uikit.store.dispatch('selectMenu', to.meta.nav || 'null|null');
//         next();
//         return null;
//       } else if (menu === 'mall') {
//         location.href = `${config.service.ht_host}/item/extra?qwe=${store.state.user.username}&dsfd=${store.state.user.password}`;
//       } else if (menu === 'sell' && !process.isLocal) {
//         location.href = `${config.service.ht_host}/marketing/coupon-list?qwe=${store.state.user.username}&dsfd=${store.state.user.password}`;
//       } else {
//         uikit.store.dispatch('selectMenu', to.meta.nav || 'null|null');
//         next();
//       }
//     });
//   } else {
//     const isLogin = Boolean(store.state.user.username); // true用户已登录， false用户未登录
//     if (auth && !isLogin && to.path !== '/login') {
//       return next({ path: '/login' });
//     } else if (process.isLocal) {
//       uikit.store.dispatch('selectMenu', to.meta.nav || 'null|null');
//       next();
//       return null;
//     } else if (menu === 'mall') {
//       location.href = `${config.service.ht_host}/item/extra?qwe=${store.state.user.username}&dsfd=${store.state.user.password}`;
//     } else if (menu === 'sell' && !process.isLocal) {
//       location.href = `${config.service.ht_host}/marketing/coupon-list?qwe=${store.state.user.username}&dsfd=${store.state.user.password}`;
//     } else {
//       uikit.store.dispatch('selectMenu', to.meta.nav || 'null|null');
//       next();
//     }
//   }
// });
export default router;