import Vue from 'vue'
import Vuex from 'vuex'
import { nanoid } from 'nanoid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    folders: JSON.parse(localStorage.getItem("folders")) || [{
      id: "001",
      name: "使用教程",
      todos: [
        { id: "01", text: "如果是小屏幕，请点击左上角的菜单图标，打开你的todo分类区", done: false },
        { id: "02", text: "你可以新增一个todo列表，然后在顶部那里修改文件名", done: false },
        { id: "03", text: "接下来就可以在你的文件夹中添加你的todo事项啦！", done: false },
        { id: "04", text: "如果想修改登记好的todo事项，点击todo对应的位置即可编辑~", done: false },

      ]
    }
    ],
    showing: false
  },
  getters: {
    todoSum: (state) => (folderId) => {
      return state.folders.find(folder => folder.id === folderId).todos.length;
    },
  },
  mutations: {
    // 创建文件夹
    addFolder(state) {
      state.folders.push({
        id: nanoid(),
        name: "newList",
        todos: []
      })
    },
    // 修改指定的文件名
    changeFolderName(state, { id, newName }) {
      state.folders.forEach(folder => {
        if (folder.id === id) folder.name = newName;
        console.log(newName);
      });
    },
    // 删除指定文件
    deleteFolder(state, id) {
      for (let i = 0; i < state.folders.length; i++) {
        if (state.folders[i].id === id) state.folders.splice(i, 1)
      }
    },
    // 增加一条todo
    addTodo(state, { folderId, addText }) {
      for (let i = 0; i < state.folders.length; i++) {
        if (state.folders[i].id === folderId) {
          state.folders[i].todos.unshift({ id: nanoid(), text: addText, done: false })
        }
      }
    },
    // 删除指定todo
    deleteTodo(state, { folderId, todoId }) {
      for (let i = 0; i < state.folders.length; i++) {
        if (state.folders[i].id === folderId) {
          for (let j = 0; j < state.folders[i].todos.length; j++) {
            if (state.folders[i].todos[j].id === todoId)
              state.folders[i].todos.splice(j, 1)
          }
        }
      }
    },
    // 修改指定todo的状态
    changeDone(state, { folderId, todoId }) {
      for (let i = 0; i < state.folders.length; i++) {
        if (state.folders[i].id === folderId) {
          for (let j = 0; j < state.folders[i].todos.length; j++) {
            if (state.folders[i].todos[j].id === todoId)
              state.folders[i].todos[j].done = !state.folders[i].todos[j].done;
          }
        }
      }
    },
    // 修改指定todo的内容
    changeText(state, { folderId, todoId, newText }) {
      for (let i = 0; i < state.folders.length; i++) {
        if (state.folders[i].id === folderId) {
          for (let j = 0; j < state.folders[i].todos.length; j++) {
            if (state.folders[i].todos[j].id === todoId)
              state.folders[i].todos[j].text = newText;
          }
        }
      }
    }
  },
})
