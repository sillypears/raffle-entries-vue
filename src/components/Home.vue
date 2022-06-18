<template>
  <layout-default>
    <div class="container">
      <div class="hero">
        <div v-if="isAuthenticated">
          Hi {{ username }}
        </div>
      </div>
      <b-container>
        <b-row>
          <b-card-group deck class="col-md-2 col-sm-6" v-for="entry in userEntries" :key="entry.id">
                <b-card
                  style="max-width: 15rem;"
                  class="mb-2"
                  :sub-title="entry.maker_name"
                >
                  <b-card-text>
                    {{ entry.epoch }}
                  </b-card-text>
                  <b-card-text>
                    <a :href="entry.raffle_link">{{ entry.notes }}</a>
                  </b-card-text>
                </b-card>
          </b-card-group>
        </b-row>
      </b-container>
    </div>
  </layout-default>
</template>

<script>
import { getEntries } from '@/api';
// import LayoutDefault from '../layouts/Layout.vue';

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      username: this.$store.getters.userInfo,
      userid: this.$store.getters.userId,
      userEntries: '',
    };
  },
  ready() {
    this.created();
  },
  async created() {
    this.userEntries = (await getEntries(this.$store.getters.userToken)).data.data;
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {

  },
};
</script>

<style>
</style>
