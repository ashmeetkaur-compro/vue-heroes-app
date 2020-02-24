<template src="./heroes.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Heroes extends Vue {
  dataURL = 'https://api.myjson.com/bins/1bomtc';
  heroesData = [];
  heroName: any = '';

  created() {
    this.heroesData = JSON.parse(localStorage.getItem('heroesData') || '{}');
  }
  
  addHero() {
    const heroesLocalStorage = JSON.parse(localStorage.getItem('heroesData') || '{}');
    const newHero = {
      id: heroesLocalStorage[heroesLocalStorage.length - 1].id + 1,
      name: this.heroName
    }

    heroesLocalStorage.push(newHero);
    localStorage.setItem('heroesData', JSON.stringify(heroesLocalStorage));
    this.heroesData = heroesLocalStorage;
  }

  deleteHero(hero: any) {
    const heroesLocalStorage = JSON.parse(localStorage.getItem('heroesData') || '{}');
    const removeHero = heroesLocalStorage.map(function(item: any) { return item.id; }).indexOf(hero.id);
    heroesLocalStorage.splice(removeHero, 1);
    this.heroesData = heroesLocalStorage;
  }
}
</script>

<style lang="scss" src="./heroes.scss" scoped>
</style>