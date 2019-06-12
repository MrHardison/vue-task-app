<template>
  <div>
  <h1>{{task.title}}</h1>

  </div>
</template>

<script>
export default {
  name: 'Task',
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  }
}
</script>

<style>

</style>
