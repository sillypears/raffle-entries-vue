import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { authenticate, getEntries } from '@/api';
import { isValidJwt, EventBus } from '@/utils';

Vue.use(Vuex);

const state = {
  entries: [],
  user: '',
  jwt: '',
};

const actions = {
  async login(context, userData) {
    context.commit('setUserInfo', { userData });
    return authenticate(userData)
      .then((response) => {
        context.commit('setJwtToken', { jwt: response.data });
        context.commit('setUserData', { data: response.data });
      })
      .catch((error) => {
        console.log('Error Authenticating: ', error);
        EventBus.$emit('failedAuthentication', error);
      });
  },
  getUserEntries(context) {
    return getEntries(context.state.jwt.token);
  },
};

const mutations = {
  setUserInfo(state, payload) {
    state.user = payload.userData.name;
  },
  setJwtToken(state, payload) {
    // localStorage.token = payload.jwt.token;
    state.jwt = payload.jwt.token;
  },
  setUserData(state, payload) {
    state.userid = payload.data.userid;
  },
};

const getters = {
  isAuthenticated(state) {
    return isValidJwt(state.jwt);
  },
  userInfo(state) {
    return state.user;
  },
  userId(state) {
    return state.userid;
  },
  userToken(state) {
    return state.jwt;
  },
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  plugins: [createPersistedState()],
});

export default store;

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
