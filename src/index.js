import './assets/style/app.scss';
import buttonBasic from './components/buttonBasic.vue';
import buttonMaxst from './components/aBasic.vue';

const BUTTON = {
  install (Vue) {
    Vue.component(buttonBasic.name, buttonBasic);
    Vue.component(buttonMaxst.name, buttonMaxst);
  }
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BUTTON);
}
export default BUTTON;
