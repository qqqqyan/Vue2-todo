<template>
  <div class="container">
    <!-- 布局 -->
    <div class="category" :class="{ isShowing: showing }">
      <ShowFolders />
      <AddFolder />
    </div>
    <div class="section">
      <div class="section-top">
        <router-view class="ShowHeader" name="ShowHeader"></router-view>
        <router-view class="AddTodo" name="AddTodo"></router-view>
      </div>
      <router-view class="ShowTodos" name="ShowTodos"></router-view>
    </div>
  </div>
</template>

<script>
import ShowFolders from "./components/ShowFolders.vue";
import AddFolder from "./components/AddFolder.vue";

export default {
  name: "App",
  components: {
    ShowFolders,
    AddFolder,
  },
  computed: {
    folders() {
      return this.$store.state.folders;
    },
    showing() {
      return this.$store.state.showing;
    },
  },
  watch: {
    folders: {
      deep: true,
      handler: function (newValue) {
        window.localStorage.setItem("folders", JSON.stringify(newValue));
      },
    },
  },
  mounted() {
    this.$router.push({
      name: "folder",
      params: { folderId: this.folders[0].id },
    });
  },
};
</script>

<style lang="css">
/* 设置背景大小、背景图片，并设置body为flexbox，使#app居中 */
html,
body {
  height: 100vh;
  width: 100%;
  margin: 0 0;
  background-image: linear-gradient(to bottom, #315481, #918e82 100%);
  display: flex;
  justify-content: center;
}
/* 设置#app大小，并设置字体样式 */
.container {
  width: 100%;
  height: calc(100% - 16px);
  margin: 8px 8px;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* 设置左侧部分高度，并清除背景颜色 */
.category {
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
}
/* 设置右侧部分的高度和背景颜色 */
.section {
  height: 100%;
  background-color: white;
}
/* 设置右侧部分的顶部的高度和背景颜色 */
.section-top {
  background-image: linear-gradient(180deg, #d0edf5, #e1e5f0);
  height: 80px;
}
/* screen<768px，右侧部分展示，左侧部分默认隐藏 */
@media screen and (max-width: 768px) {
  .container {
    display: flex;
    justify-content: left;
  }
  .section {
    width: calc(100vw - 16px);
  }
  .category {
    display: none;
    width: 270px;
  }
  .category.isShowing {
    display: block;
  }
}
/* screen>768px，设置#app最大宽度，右侧部分展示且可伸缩，左侧部分展示但保持宽度不变 */
@media screen and (min-width: 768px) {
  .container {
    max-width: 1200px;
    display: flex;
  }
  .category {
    flex: 0 0 270px;
  }
  .section {
    flex: 1;
  }
}
</style>
