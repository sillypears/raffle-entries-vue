import Vue from 'vue';
import moment from 'moment';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = true;
Vue.use(BootstrapVue);
Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
