<template>
  <nav>
    <div class="nav-wrapper blue darken-3">
      <router-link to="/" tag="a" class="brand-logo">Creation app</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link to="/" tag="li" exact active-class="active"><a href="#">Create</a></router-link>
        <router-link to="/list" tag="li" active-class="active"><a href="#">List</a></router-link>
        <router-link to="/task" tag="li" active-class="active"><a href="#">Task</a></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
</style>
