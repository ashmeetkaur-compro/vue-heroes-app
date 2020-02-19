<template src="./heroDetails.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HeroDetails extends Vue {
  dataURL = 'https://api.myjson.com/bins/1bomtc';
  heroesData = null;

  created() {

    fetch(this.dataURL)
    .then(res => res.json())
    .then((out) => {
        this.heroesData = out.Heroes.find((hero: any) => hero.id == this.$route.params.heroId);
        console.log(this.heroesData);
    }).catch(err => console.error(err));
  }
}

</script>

<style lang="scss" src="./heroDetails.scss" scoped>

</style>