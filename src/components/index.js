import Vue from 'vue';
import navbar from './navbar';
import sidebar from './sidebar';
import loading from './loading';
const components = [
    navbar,
    sidebar,
    loading
];
components.map(component => {
  Vue.component(component.name, component);
  return component;
});