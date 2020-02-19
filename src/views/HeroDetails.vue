<template>
  <div class="home">
    <HeroDetails/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroDetails from '@/components/heroDetails/heroDetails.vue'

export default {
  name: 'Home',
  components: {
    HeroDetails
  }
}
</script>