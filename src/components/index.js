import Vue from 'vue';
import navbar from './navbar';
// import sidebar from './sideba';
const components = [
    navbar
    // sidebar
];
components.map(component => {
  Vue.component(component.name, component);
  return component;
});