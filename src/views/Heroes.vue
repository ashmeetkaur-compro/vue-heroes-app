<template>
  <div class="home">
    <Heroes/>
  </div>
</template>

<script>
// @ is an alias to /src
import Heroes from '@/components/heroes/heroes.vue'

export default {
  name: 'Home',
  components: {
    Heroes
  }
}
</script>