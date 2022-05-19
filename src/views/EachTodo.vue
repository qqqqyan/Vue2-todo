<template>
  <div class="todo">
    <div class="icon-field">
      <i v-if="!isDone" class="iconfont icon-square" @click="changeDone"></i>
      <i v-else-if="isDone" class="iconfont icon-check" @click="changeDone"></i>
    </div>

    <input
      class="todo-content"
      :class="{ delete: isDone }"
      type="text"
      :value="todo.text"
      @keydown.enter="changeText($event)"
    />
    <i class="iconfont icon-delete" @click="deleteTodo"></i>
  </div>
</template>

<script>
export default {
  computed: {
    isDone() {
      return this.todo.done;
    },
    folderId() {
      return this.$route.params.folderId;
    },
    todoId() {
      return this.todo.id;
    },
  },
  props: ["todo"],
  methods: {
    // 修改todo的完成状态
    changeDone() {
      this.$store.commit("changeDone", {
        folderId: this.folderId,
        todoId: this.todoId,
      });
    },
    // 修改todo的内容
    changeText(e) {
      this.$store.commit("changeText", {
        folderId: this.folderId,
        todoId: this.todoId,
        newText: e.target.value,
      });
    },
    // 删除该todo
    deleteTodo() {
      this.$store.commit("deleteTodo", {
        folderId: this.folderId,
        todoId: this.todoId,
      });
    },
  },
};
</script>

<style scoped>
/* 设置一个todo所占高度，并设置为flexbox */
.todo {
  width: 100%;
  height: 48px;
  position: relative;
  display: flex;
  align-content: center;
}
/* 设置icon所在区域的大小 */
.icon-field {
  width: 48px;
  height: 48px;
  float: left;
  text-align: center;
}
/* 调整icon位置，并设置icon样式 */
.icon-square {
  position: relative;
  top: 14px;
  font-size: 19px;
  color: #bbe5e8;
}
.icon-check {
  position: relative;
  top: 14px;
  left: 1px;
  font-size: 16px;
  color: #aeaeae;
}
/* 设置todo信息展示的区域，并清除input样式  */
.todo-content {
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
}
/* 设置todo完成时的删除线样式 */
.delete {
  text-decoration: line-through #aeaeae;
  color: #aeaeae;
}
/* 设置图标样式，并设置位置 */
.icon-delete {
  font-size: 15px;
  color: #aeaeae;
  position: absolute;
  right: 14px;
  top: 18px;
}
</style>