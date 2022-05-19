<template>
  <div class="header">
    <i class="iconfont icon-unorderedlist" @click="showLeftField"></i>
    <input
      v-if="focus"
      @keydown.enter="changeFocus(), changeFolderName($event)"
      class="folder-name-input"
      type="text"
      :value="getFolderName"
      autofocus="autofocus"
    />
    <div class="folder-name-div" v-if="!focus" @click="changeFocus">
      {{ getFolderName }}
    </div>
    <div v-if="!focus" class="todo-sum">{{ todoSum }}</div>
    <i class="iconfont icon-delete1" @click="deleteFolder"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focus: false,
    };
  },
  computed: {
    id() {
      return this.$route.params.folderId;
    },
    todoSum() {
      return this.$store.getters.todoSum(this.id);
    },
    getFolderName() {
      return this.$store.state.folders.find((folder) => folder.id === this.id)
        .name;
    },
  },
  methods: {
    //
    showLeftField() {
      this.$store.state.showing = !this.$store.state.showing;
    },
    // 根据focus的值，判断展示div还是展示input
    changeFocus() {
      this.focus = !this.focus;
    },
    // 更改文件夹名字
    changeFolderName(e) {
      this.$store.commit("changeFolderName", {
        id: this.id,
        newName: e.target.value,
      });
    },
    // 删除该文件夹，并在右侧重新展示第一个文件夹
    deleteFolder() {
      this.$store.commit("deleteFolder", this.id);
      this.newPath();
    },
    newPath() {
      this.$router.push({
        name: "folder",
        params: {
          folderId: this.$store.state.folders[0].id,
        },
      });
    },
  },
};
</script>

<style scoped>
/* 设置该div的大小与字体颜色 */
.header {
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 15px;
  color: #1c3f53;
  position: relative;
  display: flex;
}
/* 设置input框的大小与样式 */
.folder-name-input {
  width: 80%;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
}
/* 设置list-icon样式 */
.icon-unorderedlist {
  font-weight: 600;
  font-size: 18px;
}
/* 设置input框不展示时的div，并微调位置，并设置float连接数字圆圈.todo-sum  */
.folder-name-div {
  width: auto;
  font-size: 18px;
  line-height: 18.7px;
  position: relative;
  left: 2px;
  margin-right: 8px;
}
/* 设置数字圆圈的样式，并设置float */
.todo-sum {
  height: 18.7px;
  line-height: 17px;
  width: 17.8px;
  color: white;
  font-size: 12px;
  text-align: center;
  border-radius: 50%;
  background-color: #2cc5d2;
}
/* 设置icon大小，并设置位置 */
.icon-delete1 {
  font-size: 20px;
  position: absolute;
  right: 20px;
  top: 16px;
}
/* 设置屏幕小于768时，展示list-icon，并使展示名字的div居中 */
@media screen and (max-width: 768px) {
  .icon-unorderedlist {
    display: inline;
    position: absolute;
    left: 17px;
    top: 14px;
  }
  .header {
    justify-content: center;
  }
}
/* 设置屏幕小于768时，取消list-icon，并使展示名字的div靠左 */
@media screen and (min-width: 768px) {
  .header {
    justify-content: left;
  }
  .icon-unorderedlist {
    display: none;
  }
}
</style>