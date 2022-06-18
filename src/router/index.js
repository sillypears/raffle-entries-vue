import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import HomeView from '../components/Home.vue';
import LoginView from '../components/Login.vue';
import RegisterView from '../components/Register.vue';
import PingView from '../components/Ping.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
      beforeEnter(to, from, next) {
        if (!store.getters.isAuthenticated) {
          next('/login');
        } else {
          next();
        }
      },
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView,
    },
    {
      path: '/ping',
      name: 'PingView',
      component: PingView,
    },
  ],
});
