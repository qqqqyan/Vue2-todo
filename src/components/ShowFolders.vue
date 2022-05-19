<template>
  <div>
    <li v-for="folder in folders" :key="folder.id">
      <EachFolder :folderName="folder.name" :folderId="folder.id" />
    </li>
  </div>
</template>

<script>
import EachFolder from "./EachFolder.vue";
export default {
  name: "ShowFolders",
  components: { EachFolder },
  computed: {
    folders() {
      return this.$store.state.folders;
    },
  },
};
</script>

<style scoped>
/* 清除li样式 */
li {
  list-style-type: none;
}
</style>