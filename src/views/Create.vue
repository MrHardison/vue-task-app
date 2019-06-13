<template>
  <div>
    <h1>Create task</h1>
    <hr>
    <form @submit.prevent="submitHandler" class="s6">
      <div class="input-field">
        <input placeholder="title" id="title" v-model="title" type="text" required class="validate">
        <label for="title">Title</label>
        <span class="helper-text" data-error="Title is required"></span>
      </div>
       <div class="chips" ref="chips"></div>
        <div class="input-field">
          <textarea id="description" class="materialize-textarea" v-model="description"></textarea>
          <label for="description">Textarea</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{ description.length }}/2048</span>
        </div>
        <input type="text" class="datepicker" ref="datepicker">
        <button type="submit" class="btn">Create task</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "create",
  components: {
  },
  data: () => ({
    title: '',
    description: '',
    chips: null,
    date: null
  }),
  mounted() {
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tags'
    }),
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd-mm-yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        status: 'active',
        id: Date.now(),
        tags: this.chips.chipsData,
        date: this.date.date
      }
      this.$store.dispatch('createTask', task)
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
