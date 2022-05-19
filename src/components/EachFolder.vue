<template>
  <div class="folder" @click="changePath">
    <div class="folder-name">{{ folderName }}</div>
    <div class="todo-sum">{{ todoSum }}</div>
  </div>
</template>

<script>
export default {
  name: "EachFolder",
  props: ["folderName", "folderId"],
  computed: {
    todoSum() {
      return this.$store.getters.todoSum(this.folderId);
    },
  },
  methods: {
    // 根据点击的文件夹，在右侧展示相应的内容
    changePath() {
      this.$router.push({
        name: "folder",
        params: { folderId: this.folderId },
      });
    },
  },
};
</script>

<style lang="css" scoped>
/* 设置一个folder所占宽高和内边距，设置字体、下边框 */
.folder {
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 16px 40px;
  color: white;
  border-bottom: 1px solid hsl(0deg 0% 100% / 15%);
  position: relative;
}
/* 设置字体大小 */
.folder-name {
  font-size: 16px;
}
/* 设置数字圆圈样式，并设置其位置 */
.todo-sum {
  height: 18.7px;
  line-height: 17px;
  width: 17.8px;
  font-size: 12px;
  text-align: center;
  border-radius: 50%;
  background-color: #2cc5d2;
  position: absolute;
  right: 20px;
  top: 16px;
}
</style>