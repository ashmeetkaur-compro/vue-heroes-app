<template src="./heroes.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Heroes extends Vue {
  dataURL = 'https://api.myjson.com/bins/1bomtc';
  heroesData = [];

  created() {
    fetch(this.dataURL)
    .then(res => res.json())
    .then((out) => {
        this.heroesData = out.Heroes
    }).catch(err => console.error(err));
  }

}
</script>

<style lang="scss" src="./heroes.scss" scoped>
</style>