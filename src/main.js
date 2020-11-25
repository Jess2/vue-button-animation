import Vue from 'vue';
import App from './App.vue';
import VueButtonAnimation from './index.js';

Vue.use(VueButtonAnimation);

new Vue({
  el: '#app',
  render: h => h(App),
});
