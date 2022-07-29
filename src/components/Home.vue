<template>
    <div class="container">
      <div class="nav">
        <ul class="">
          <li class="nav-item">Home</li>
        </ul>
        <ul>
          <li class="nav-item">New Entry</li>
        </ul>
        <ul>
          <li class="nav-item">New Maker</li>
        </ul>
        <ul class="ms-auto">
          <div class="hero">
            <div v-if="isAuthenticated">
              Hi <a href="/logout" >{{ username }}</a>
            </div>
          </div>
          </ul>
      </div>

      <b-container>
        <div>
          You've entered {{ }}
        </div>
        <b-row class="float-left">
          <b-card-group deck class="col-md-2 col-sm-6" v-for="entry in userEntries" :key="entry.id">
                <b-card
                  style="max-width: 15rem;"
                  class="shadow-lg mb-2"
                >
                <b-card-title>
                  <b-row>
                    <b-col class="">
                      <a class="link-info" :href="`/maker/id/${entry.maker_id}`">
                        {{ entry.maker_name}}
                      </a>
                    </b-col>
                    <b-col class="mx-auto text-center col-md-3 font-size-12">
                      <div class="rounded result-green" v-if="entry.result === true">
                        W
                      </div>
                      <div class="rounded result-red" v-else>
                        L
                      </div>
                    </b-col>
                  </b-row>
                </b-card-title>
                  <b-card-text>
                    <a :href="`/entry/id/${entry.id}`">
                      {{ moment(entry.epoch).format('YYYY-MM-DD') }}
                    </a>
                  </b-card-text>
                  <b-card-text>
                    <a :href="entry.raffle_link" target="_blank">{{ entry.notes }}</a>
                  </b-card-text>
                  <b-card-footer>
                    <b-row>
                      <b-col class="col-md-6 text-center">
                        <button class="btn success" value="flip">Flip</button>
                      </b-col>
                      <b-col class="col-md-6 text-center">
                        <button class="btn primary" value="edit">Edit</button>
                      </b-col>
                    </b-row>
                  </b-card-footer>
                </b-card>
          </b-card-group>
        </b-row>
      </b-container>
    </div>
</template>

<script>
import { getEntries } from '@/api';

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
.result-green {
    background-color: rgb(183, 243, 183);
}

.result-red {
    background-color: rgb(247, 191, 191);
}
</style>
