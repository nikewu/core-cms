import Vue from 'vue';
import './filters';
import './components';
import './mixins';
import './validators';
import store from './store';
import router from './router';
import index from './index.vue';
import './assets/css/index.scss';
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(index)
});