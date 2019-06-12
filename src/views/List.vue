<template>
  <div>
    <h1>List</h1>
    <hr>
    <table v-if="tasks">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th>Status</th>
          <th>Open</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(task, i) in tasks"
          :key="i">
          <td>{{i+1}}</td>
          <td>{{task.title}}</td>
          <td>{{new Date(task.date).toLocaleDateString()}}</td>
          <td class="sliced"><div class="text">{{task.description}}</div></td>
          <td>{{task.status}}</td>
          <td>
            <router-link
              class="btn btn-small"
              tag="button"
              :to="`/task/${task.id}`">
              Open
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'List',
  computed: {
    tasks() {
      return this.$store.getters.tasks
    }
  }
}
</script>

<style scoped lang="scss">
.sliced {
  max-width: 400px;
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
