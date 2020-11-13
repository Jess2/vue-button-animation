import './assets/css/app.css';
import buttonBasic from './lib/button-basic.vue';

const BUTTON = {
  install (Vue) {
    Vue.component(buttonBasic.name, buttonBasic);
  }
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BUTTON);
}
export default BUTTON;
