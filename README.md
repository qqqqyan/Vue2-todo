# tiny-todo
## 1. 简介

- 使用到的相关知识：
    本项目使用Vue-CLI的开发环境，创建了基于Vue2的todo项目。该项目主要应用了Vue的基础知识，包括但不限于（1.实例 2.组件 3.指令 4.事件绑定 5.计算属性 6.组件交互），也应用了Vuex和VueRoute，并使用localStorage存储数据。另外，引入了iconfont的图标。

- 实现的todo应用功能：
    用户可进行todo事项的分类，创建分类夹，并在相应的分类下创建todo事项，修改todo事项等。当用户再次打开该网页时，数据仍存在。

- 预览地址：

- 运行：
    ```bash
    # 更新依赖包
    npm install
    # 本地运行 at localhost:8080
    npm run dev
    # 打包
    npm run build
    ```
<br/>

## 2. 实现

### 2.1 页面分析：布局与组件划分

### 响应式布局

- 左分类栏category

  pc端固定大小，移动端默认不展示

- 右展示栏section

  流式大小

### 组件

- App

  - ShowFolders

    - EachFolder
  - AddFolder
  - Header

    - RenameFolder
    - DeleteFolder
  - AddTodo
  - ShowTodos

    - EachTodo



### 2.2 功能分析

- 用户：点击“add-folder”添加一个分类，得到一个默认名称为newList的文件夹，并看到右侧自动展开的文件夹

  - 实现添加分类：

    1. $store --> folders.push()

    2. 更改path

- 用户：点击任意一个folder，看到右侧展开的文件夹

  - 实现展开分类：

    1. 更改path
- 用户：点击header里的文件名，更改后按回车得到新名字

  - 实现修改文件名：

    1. 从展示div，变成展示input，获得值后再复原为div
    2. $store --> name = value

- 用户：点击header的垃圾桶图标，删除该文件夹，右侧展示第一个文件夹的内容

  - 实现删除文件夹：

    1. 更改path

    2. $store --> splice(index,1)

- 用户：点击输入框，输入内容后按下回车，todos区看到添加的todo，且folder旁的todo数量提醒+1

  - 实现添加todo：

    1. $store --> todos.push()

    2. $store --> getters --> todos.length

- 用户：点击勾选框，勾选框变成勾勾，字体变灰且加删除线，且folder旁的todo数量提醒-1

  - 实现完成todo：

    1. v-if更换图标，更换字体样式

    2. $store --> getters

- 用户：点击todo的内容，进入可编辑状态，按回车以更改todo内容

  - 实现修改todo：
    1. $store --> text=value

- 用户：点击todo后的垃圾桶图标，todo被清除

  - 实现删除todo：

    1. $store --> splice(index,1)



### 2.3 辅助功能

- ###### localStorage保存用户数据。另外，用户打开时展示使用教程，如果用户删除了教程，那么当用户再次打开时，不再展示教程。

  1. localStorage初始为空，读取时不能替换掉教程数据

  2. 监视folders变化，localStorage不断获取最新的folders

  3. 再次打开，localStorage为最近的数据，替换掉原始的教程数据

     - 实现：$store.folders = getItem || 初始folders

       ​			

### 2.4 路由

- 效果：点击folder以更换文件夹，新建文件夹时展开新文件夹，删除文件夹后展开第一个文件夹

- 实现：

  path:”/:folderId“,

  components:{Header,AddTodo,ShowTodos}

  1. 点击folder以更换文件夹：

     EachFolder --> @click="changePath"

  2. 新建文件夹时展开新文件夹：

     AddFolder --> @click="toLastFolder"

  3. 删除文件夹后展开第一个文件夹：

     showHeader --> @click="toFirstFolder"



### 2.5 vuex

- state：folders[{id,name,todos[{id,text,done}...]}...]

- getter:todoSum

- mutation:

  - addFolder

  - changeFolderName

  - deleteFolder

  - addTodo

  - deleteTodo

  - changeDone

  - changeText

    
