<template src="./heroDetails.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HeroDetails extends Vue {
  dataURL = 'https://api.myjson.com/bins/1bomtc';
  heroesData = null;

  created() {
    const heroes = JSON.parse(localStorage.getItem('heroesData') || '{}');
    this.heroesData = heroes.find((hero: any) => hero.id == this.$route.params.heroId);
  }
}

</script>

<style lang="scss" src="./heroDetails.scss" scoped>

</style>