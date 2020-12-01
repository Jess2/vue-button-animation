import './assets/style/app.scss';
import buttonBasic from './components/buttonBasic.vue';
import aBasic from './components/aBasic.vue';
import buttonPress from './components/buttonPress.vue';
import aPress from './components/aPress.vue';
import buttonNeon from './components/buttonNeon.vue';
import aNeon from './components/aNeon.vue';
import radioBasic from "@/components/radioBasic";
import checkboxBasic from "@/components/checkboxBasic";
import fileBasic from "@/components/fileBasic";
import selectBasic from "@/components/selectBasic";

const BUTTON = {
  install (Vue) {
    Vue.component(buttonBasic.name, buttonBasic);
    Vue.component(aBasic.name, aBasic);
    Vue.component(buttonPress.name, buttonPress);
    Vue.component(aPress.name, aPress);
    Vue.component(buttonNeon.name, buttonNeon);
    Vue.component(aNeon.name, aNeon);
    Vue.component(radioBasic.name, radioBasic);
    Vue.component(checkboxBasic.name, checkboxBasic);
    Vue.component(fileBasic.name, fileBasic);
    Vue.component(selectBasic.name, selectBasic);
  }
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BUTTON);
}
export default BUTTON;
