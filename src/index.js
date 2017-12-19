import Vue from 'vue';
// import VeeValidate from 'vee-validate';
// import components  from './components';
// import mixins from './mixins';
// import filter from './filter.js'
import './filters';
import './components';
import './mixins';
import router from './router.js';
// import store from './store';
import index from './index.vue';
// 注册全局组件
// components.map(component => {
//   Vue.component(component.name, component);
//   return component;
// });
// 注册全局公共方法
// Vue.mixin(mixins);
// 注册全局过滤器

// Vue.use(VeeValidate);
new Vue({
  el: '#app',
//   store,
  router,
  render: h => h(index)
});