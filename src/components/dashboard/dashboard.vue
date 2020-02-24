<template src="./dashboard.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HeroSearch from '@/components/hero-search/hero-search';

@Component({
  // components: {
  //   HeroSearch
  // }
})
export default class Dashboard extends Vue {
  // dataURL = 'https://api.myjson.com/bins/1bomtc';
  heroesData = [];
  // @Prop() private msg!: string;

  getHereos(allHeroes: any): any {
    return allHeroes.slice(1, 5)
  }

  created() {debugger;

    if(!localStorage.getItem('heroesData')) {
      fetch('https://api.myjson.com/bins/1bomtc')
      .then(res => res.json())
      .then((out) => {
          localStorage.setItem('heroesData', JSON.stringify(out.Heroes));
          this.heroesData = this.getHereos(out.Heroes)
      }).catch(err => console.error(err));
    }
    else {
      this.heroesData = this.getHereos(JSON.parse(localStorage.getItem('heroesData') || '{}'))
    }
    
  }
}

</script>

<style lang="scss" src="./dashboard.scss" scoped>

</style>