<template src="./dashboard.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dashboard extends Vue {

  // dataURL = 'https://api.myjson.com/bins/1bomtc';
  heroesData = [];
  // @Prop() private msg!: string;

  getHereos(allHeroes: any): any {
    return allHeroes.slice(1, 5)
  }

  created() {
    fetch('https://api.myjson.com/bins/1bomtc')
    .then(res => res.json())
    .then((out) => {
        this.heroesData = this.getHereos(out.Heroes)
    }).catch(err => console.error(err));
  }
}

</script>

<style lang="scss" src="./dashboard.scss" scoped>

</style>