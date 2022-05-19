import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowHeader from '../views/ShowHeader'
import AddTodo from '../views/AddTodo'
import ShowTodos from '../views/ShowTodos'


Vue.use(VueRouter)

const routes = [
  {
    name: "folder",
    path: '/:folderId',
    components: {
      ShowHeader,
      AddTodo,
      ShowTodos
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
