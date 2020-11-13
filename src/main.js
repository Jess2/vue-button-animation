import Vue from 'vue';
import App from './App.vue';

import vueButtonAnimation from './index.js';
Vue.use(vueButtonAnimation);

new Vue({
  el: '#app',
  render: h => h(App),
});
