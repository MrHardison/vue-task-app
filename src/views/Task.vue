<template>
  <div>
    <template v-if="task">
      <h1>{{task.title}}</h1>
      <form @submit.prevent="submitHandler" class="s6">
        <div class="chips" ref="chips"></div>
        <div class="input-field">
          <textarea id="description" class="materialize-textarea textarea-high" v-model="description"></textarea>
          <label for="description">Textarea</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{ task.description.length }}/2048</span>
        </div>
        <input type="text" class="datepicker" ref="datepicker">
        <div
          v-if="task.status !== 'completed'"
          class="btn-wrapper">
          <button type="submit" class="btn">Update task</button>
          <button type=""button class="btn blue" @click="completeTask">Complete task</button>
        </div>
      </form>
    </template>
    <h2 v-else>Task not found!</h2>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Task',
  data: () => ({
    description: '',
    chips: null,
    date: null
  }),
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  },
  mounted() {
    this.description = this.task.description
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tags',
      data: this.task.tags
    }),
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd-mm-yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true
    })
    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  },
  methods: {
    submitHandler() {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        description: this.description,
        date: this.date.date
      })
      this.$router.push('/list')
    },
    completeTask() {
      this.$store.dispatch('completeTask', +this.task.id)
      this.$router.push('/list')
    },
    destroyed() {
      if (this.data && this.date.destroy) {
        this.date.destroy()
      }
      if (this.chips && this.chips.destroy) {
        this.chips.destroy()
      }
    }
  }
}
</script>

<style scoped>
.btn-wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.textarea-high {
  min-height: 150px;
}
</style>
