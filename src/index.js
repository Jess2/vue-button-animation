import './assets/style/app.scss';
import buttonBasic from './components/buttonBasic.vue';
import aBasic from './components/aBasic.vue';
import buttonPress from './components/buttonPress.vue';
import aPress from './components/aPress.vue';

const BUTTON = {
  install (Vue) {
    Vue.component(buttonBasic.name, buttonBasic);
    Vue.component(aBasic.name, aBasic);
    Vue.component(buttonPress.name, buttonPress);
    Vue.component(aPress.name, aPress);
  }
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BUTTON);
}
export default BUTTON;
