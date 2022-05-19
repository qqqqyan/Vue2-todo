<template>
  <div class="folder" @click="toAddFolder">
    <div class="add-folder">
      <i class="iconfont icon-add"></i>
    </div>
    <span class="folder-name">新增</span>
  </div>
</template>

<script>
export default {
  computed: {
    folders() {
      return this.$store.state.folders;
    },
  },
  methods: {
    // 得到一个名称为newList的文件夹，并在右侧自动展开该文件夹
    toAddFolder() {
      this.$store.commit("addFolder");
      this.$router.push({
        name: "folder",
        params: {
          folderId: this.folders[this.folders.length - 1].id,
        },
      });
    },
  },
};
</script>

<style scoped>
/* 设置一个add-folder所占宽高和内边距，设置字体、下边框 */
.folder {
  height: 48px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 40px;
  color: #5db9ff;
  border-bottom: 1px solid hsl(0deg 0% 100% / 15%);
  position: relative;
  cursor: pointer;
}
/* 设置图标位置 */
.add-folder {
  position: absolute;
  left: 8px;
}
/* 设置图标大小 */
.icon-add {
  font-size: 22px;
}
/* 设置文件名字体大小 */
.folder-name {
  font-size: 16px;
}
</style>>
