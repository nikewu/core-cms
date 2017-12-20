import Vue from 'vue';
import './filters';
import './components';
import './mixins';
import store from './store';
import router from './router';
import index from './index.vue';
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(index)
});