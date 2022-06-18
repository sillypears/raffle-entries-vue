<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title">Register</h2>
          <p class="subtitle error-msg">{{ errorMsg }}</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="field">
          <label class="label is-large" for="name">Username:
            <div class="control">
              <input type="name" class="input is-large" id="name" v-model="name">
            </div>
          </label>
        </div>
        <div class="field">
          <label class="label is-large" for="password">Password:
            <div class="control">
              <input type="password" class="input is-large" id="password" v-model="password">
            </div>
          </label>
        </div>

        <div class="control">
           <button class="button is-primary" @click="register" >Login</button>
          <a class="button is-success" onKeyPress="register">Register</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { EventBus } from '@/utils';

export default {
  name: 'LoginView',
  data() {
    return {
      name: '',
      password: '',
      errorMsg: '',
    };
  },
  methods: {
    authenticate() {
      this.$store.dispatch('login', { name: this.name, password: this.password })
        .then(() => this.$router.push('/').catch(() => {}));
    },
    register() {
      this.$store.dispatch('register', { name: this.name, password: this.password })
        .then(() => this.$router.push('/login'));
    },
  },
  mounted() {
    EventBus.$on('failedRegistering', (msg) => {
      this.errorMsg = msg;
    });
  },
  beforeDestroy() {
    EventBus.$off('failedRegistering');
    EventBus.$off('failedAuthentication');
  },
};
</script>

<style lang="scss">
.error-msg {
  color: red;
  font-weight: bold;
}
</style>
