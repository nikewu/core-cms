import Vue from 'vue';
import VeeValidate from 'vee-validate';
import components  from './components';
import mixins from './mixins';
import router from './router.js';
// import store from './store';
import index from './index.vue';
components.map(component => {
  Vue.component(component.name, component);
  return component;
});
Vue.mixin(mixins);
Vue.use(VeeValidate);
new Vue({
  el: '#app',
//   store,
  router,
  render: h => h(index)
});