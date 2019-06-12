<template>
  <div id="app">
    <Navbar />
    <div class="container row">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  components: {Navbar}
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.brand-logo {
  left: 1rem;
}
.nav-wrapper {
  padding: 0 1rem;
}

@import '~materialize-css/dist/css/materialize.min.css'
</style>
