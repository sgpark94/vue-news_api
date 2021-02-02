<template>
  <div>
    <p v-for="job in fetchedJobs">{{ job.title }}</p>
  </div>
</template>

<script>
// import { fetchJobs } from '../api/index.js';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedJobs'])
  },
  created(){
    this.$store.dispatch('FETCH_JOBS')
    console.log(this.$route);
    // fetchJobs()
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));
  }
}
</script>
