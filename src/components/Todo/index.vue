<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>

<script>
export default {
  props: {
    id: String,
    name: String,
    status: String
  },
  name: 'Todo',
  components: {},
  methods: {
    changeStatus() {
      this.$store.dispatch('setStatus', { id: this.id, status: this.status === "active" ? "completed": "active" })
    },
    deleteTodo() {
      this.$store.dispatch('removeTodo', { id: this.id })
    }
  }
}
</script>


