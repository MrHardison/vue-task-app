<template>
  <div>
    <h1>Create task</h1>
    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <input placeholder="title" id="title" type="text" required class="validate">
        <label for="title">Title</label>
        <span class="helper-text" data-error="Title is required"></span>
      </div>
       <div class="chips" ref="chips"></div>
        <div class="input-field col s12">
          <textarea id="description" class="materialize-textarea" v-model="description"></textarea>
          <label for="description">Textarea</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{ description.length }}/120</span>
        </div>
        <input type="text" class="datepicker" ref="datepicker">
        <button class="btn">Create task</button>
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
    }
  }
}
</script>
