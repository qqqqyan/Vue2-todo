<template>
  <div><EachTodo v-for="todo in todos" :key="todo.id" :todo="todo" /></div>
</template>

<script>
import EachTodo from "./EachTodo.vue";
export default {
  components: { EachTodo },
  computed: {
    todos() {
      return this.$store.state.folders.find(
        (folder) => folder.id === this.$route.params.folderId
      ).todos;
    },
  },
};
</script>

<style>
</style>