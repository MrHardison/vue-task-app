<template>
  <div>
    <h1>List</h1>
    <div class="input-field">
      <select ref="select" v-model="filter">
        <option value="" disabled selected>Choose your option</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
        <option value="outdated">Outdated</option>
      </select>
      <label>Materialize Select</label>
    </div>
    <button
      class="btn red"
      @click="clearFilter">
      Clear filter
    </button>
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
          v-for="(task, i) in filteredTasks"
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
  data() {
    return {
      filter: null
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    filteredTasks() {
      return this.tasks.filter(task => {
        if (!this.filter) {
          return true
        } else {
          return task.status === this.filter
        }
      })
    }
  },
  mounted() {
    M.FormSelect.init(this.$refs.select)
  },
  methods: {
    clearFilter() {
      this.filter = null
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
