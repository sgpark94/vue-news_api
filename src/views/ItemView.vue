<template>
  <div>
    item
  </div>
</template>

<script>
import { fetchItem } from '../api/index.js';

export default {
  created() {
    fetchItem()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
