<template>
  <div class="add-todo">
    <i class="iconfont icon-addition" :class="{ iconColor: isFocus }"></i>
    <input
      class="todo-input"
      type="text"
      placeholder="请输入"
      @keydown.enter="addTodo($event)"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 用以更改icon的class，更改其颜色
      isFocus: false,
    };
  },
  methods: {
    // 增加一条todo
    addTodo(e) {
      this.$store.commit("addTodo", {
        folderId: this.$route.params.folderId,
        addText: e.target.value,
      });
      e.target.value = "";
    },
  },
};
</script>

<style scoped>
/* 设置该div的大小，并设置为flexbox */
.add-todo {
  width: 100%;
  height: 32px;
  padding: 0 16px;
  display: flex;
}
/* 设置icon大小和颜色且纵向调整位置 */
.icon-addition {
  font-size: 18px;
  font-weight: 600;
  color: #aeaeae;
  margin-right: 7px;
  position: relative;
  top: 6px;
}
/* 设置input框选中时，icon的颜色 */
.iconColor {
  color: #2cc5d2;
}
/* 设置input框大小并清除样式 */
.todo-input {
  width: 100%;
  font-size: 14px;
  color: #333;
  background-color: rgba(0, 0, 0, 0);
  cursor: text;
  border: none;
  outline: none;
}
</style>