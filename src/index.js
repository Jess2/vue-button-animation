import './assets/style/app.scss';
import buttonBasic from './components/button-basic.vue';

const BUTTON = {
  install (Vue) {
    Vue.component(buttonBasic.name, buttonBasic);
  }
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BUTTON);
}
export default BUTTON;
