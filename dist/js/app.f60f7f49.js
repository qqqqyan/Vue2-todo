(function(){"use strict";var e={7742:function(e,t,o){var s=o(8935),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"category",class:{isShowing:e.showing}},[o("ShowFolders"),o("AddFolder")],1),o("div",{staticClass:"section"},[o("div",{staticClass:"section-top"},[o("router-view",{staticClass:"ShowHeader",attrs:{name:"ShowHeader"}}),o("router-view",{staticClass:"AddTodo",attrs:{name:"AddTodo"}})],1),o("router-view",{staticClass:"ShowTodos",attrs:{name:"ShowTodos"}})],1)])},r=[],n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",e._l(e.folders,(function(e){return o("li",{key:e.id},[o("EachFolder",{attrs:{folderName:e.name,folderId:e.id}})],1)})),0)},i=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"folder",on:{click:e.changePath}},[o("div",{staticClass:"folder-name"},[e._v(e._s(e.folderName))]),o("div",{staticClass:"todo-sum"},[e._v(e._s(e.todoSum))])])},a=[],c={name:"EachFolder",props:["folderName","folderId"],computed:{todoSum(){return this.$store.getters.todoSum(this.folderId)}},methods:{changePath(){this.$router.push({name:"folder",params:{folderId:this.folderId}})}}},f=c,u=o(1001),h=(0,u.Z)(f,l,a,!1,null,"2d47e8bc",null),m=h.exports,p={name:"ShowFolders",components:{EachFolder:m},computed:{folders(){return this.$store.state.folders}}},v=p,g=(0,u.Z)(v,n,i,!1,null,"2713ab94",null),w=g.exports,_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"folder",on:{click:e.toAddFolder}},[e._m(0),o("span",{staticClass:"folder-name"},[e._v("新增")])])},$=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"add-folder"},[o("i",{staticClass:"iconfont icon-add"})])}],I={computed:{folders(){return this.$store.state.folders}},methods:{toAddFolder(){this.$store.commit("addFolder"),this.$router.push({name:"folder",params:{folderId:this.folders[this.folders.length-1].id}})}}},x=I,C=(0,u.Z)(x,_,$,!1,null,"711bdcdc",null),F=C.exports,k={name:"App",components:{ShowFolders:w,AddFolder:F},computed:{folders(){return this.$store.state.folders},showing(){return this.$store.state.showing}},watch:{folders:{deep:!0,handler:function(e){window.localStorage.setItem("folders",JSON.stringify(e))}}},mounted(){this.$router.push({name:"folder",params:{folderId:this.folders[0].id}})}},y=k,T=(0,u.Z)(y,d,r,!1,null,null,null),S=T.exports,b=o(2809),E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header"},[o("i",{staticClass:"iconfont icon-unorderedlist",on:{click:e.showLeftField}}),e.focus?o("input",{staticClass:"folder-name-input",attrs:{type:"text",autofocus:"autofocus"},domProps:{value:e.getFolderName},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.changeFocus(),e.changeFolderName(t)}}}):e._e(),e.focus?e._e():o("div",{staticClass:"folder-name-div",on:{click:e.changeFocus}},[e._v(" "+e._s(e.getFolderName)+" ")]),e.focus?e._e():o("div",{staticClass:"todo-sum"},[e._v(e._s(e.todoSum))]),o("i",{staticClass:"iconfont icon-delete1",on:{click:e.deleteFolder}})])},O=[],Z={data(){return{focus:!1}},computed:{id(){return this.$route.params.folderId},todoSum(){return this.$store.getters.todoSum(this.id)},getFolderName(){return this.$store.state.folders.find((e=>e.id===this.id)).name}},methods:{showLeftField(){this.$store.state.showing=!this.$store.state.showing},changeFocus(){this.focus=!this.focus},changeFolderName(e){this.$store.commit("changeFolderName",{id:this.id,newName:e.target.value})},deleteFolder(){this.$store.commit("deleteFolder",this.id),this.newPath()},newPath(){0===this.$store.state.folders.length?this.$router.push({name:"home"}):this.$router.push({name:"folder",params:{folderId:this.$store.state.folders[0].id}})}}},N=Z,P=(0,u.Z)(N,E,O,!1,null,"4ba9e9b3",null),D=P.exports,A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"add-todo"},[o("i",{staticClass:"iconfont icon-addition",class:{iconColor:e.isFocus}}),o("input",{staticClass:"todo-input",attrs:{type:"text",placeholder:"请输入"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},focus:function(t){e.isFocus=!0},blur:function(t){e.isFocus=!1}}})])},j=[],H={data(){return{isFocus:!1}},methods:{addTodo(e){this.$store.commit("addTodo",{folderId:this.$route.params.folderId,addText:e.target.value}),e.target.value=""}}},L=H,J=(0,u.Z)(L,A,j,!1,null,"b14c3cb6",null),q=J.exports,M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",e._l(e.todos,(function(e){return o("EachTodo",{key:e.id,attrs:{todo:e}})})),1)},z=[],B=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todo"},[o("div",{staticClass:"icon-field"},[e.isDone?e.isDone?o("i",{staticClass:"iconfont icon-check",on:{click:e.changeDone}}):e._e():o("i",{staticClass:"iconfont icon-square",on:{click:e.changeDone}})]),o("input",{staticClass:"todo-content",class:{delete:e.isDone},attrs:{type:"text"},domProps:{value:e.todo.text},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.changeText(t)}}}),o("i",{staticClass:"iconfont icon-delete",on:{click:e.deleteTodo}})])},G=[],K={computed:{isDone(){return this.todo.done},folderId(){return this.$route.params.folderId},todoId(){return this.todo.id}},props:["todo"],methods:{changeDone(){this.$store.commit("changeDone",{folderId:this.folderId,todoId:this.todoId})},changeText(e){this.$store.commit("changeText",{folderId:this.folderId,todoId:this.todoId,newText:e.target.value})},deleteTodo(){this.$store.commit("deleteTodo",{folderId:this.folderId,todoId:this.todoId})}}},Q=K,R=(0,u.Z)(Q,B,G,!1,null,"4ca5a57a",null),U=R.exports,V={components:{EachTodo:U},computed:{todos(){return this.$store.state.folders.find((e=>e.id===this.$route.params.folderId)).todos}}},W=V,X=(0,u.Z)(W,M,z,!1,null,null,null),Y=X.exports;s.Z.use(b.Z);const ee=[{name:"folder",path:"/:folderId",components:{ShowHeader:D,AddTodo:q,ShowTodos:Y}}],te=new b.Z({mode:"hash",routes:ee});var oe=te,se=o(4665),de=o(562);s.Z.use(se.ZP);var re=new se.ZP.Store({state:{folders:JSON.parse(localStorage.getItem("folders"))||[{id:"001",name:"使用教程",todos:[{id:"01",text:"如果是小屏幕，请点击左上角的菜单图标，打开你的todo分类区",done:!1},{id:"02",text:"你可以新增一个todo列表，然后在顶部那里修改文件名",done:!1},{id:"03",text:"接下来就可以在你的文件夹中添加你的todo事项啦！",done:!1},{id:"04",text:"如果想修改登记好的todo事项，点击todo对应的位置即可编辑~",done:!1}]}],showing:!1},getters:{todoSum:e=>t=>e.folders.find((e=>e.id===t)).todos.length},mutations:{addFolder(e){e.folders.push({id:(0,de.x0)(),name:"newList",todos:[]})},changeFolderName(e,{id:t,newName:o}){e.folders.forEach((e=>{e.id===t&&(e.name=o),console.log(o)}))},deleteFolder(e,t){for(let o=0;o<e.folders.length;o++)e.folders[o].id===t&&e.folders.splice(o,1)},addTodo(e,{folderId:t,addText:o}){for(let s=0;s<e.folders.length;s++)e.folders[s].id===t&&e.folders[s].todos.unshift({id:(0,de.x0)(),text:o,done:!1})},deleteTodo(e,{folderId:t,todoId:o}){for(let s=0;s<e.folders.length;s++)if(e.folders[s].id===t)for(let t=0;t<e.folders[s].todos.length;t++)e.folders[s].todos[t].id===o&&e.folders[s].todos.splice(t,1)},changeDone(e,{folderId:t,todoId:o}){for(let s=0;s<e.folders.length;s++)if(e.folders[s].id===t)for(let t=0;t<e.folders[s].todos.length;t++)e.folders[s].todos[t].id===o&&(e.folders[s].todos[t].done=!e.folders[s].todos[t].done)},changeText(e,{folderId:t,todoId:o,newText:s}){for(let d=0;d<e.folders.length;d++)if(e.folders[d].id===t)for(let t=0;t<e.folders[d].todos.length;t++)e.folders[d].todos[t].id===o&&(e.folders[d].todos[t].text=s)}}});s.Z.config.productionTip=!1,new s.Z({router:oe,store:re,render:e=>e(S)}).$mount("#app")}},t={};function o(s){var d=t[s];if(void 0!==d)return d.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,s,d,r){if(!s){var n=1/0;for(c=0;c<e.length;c++){s=e[c][0],d=e[c][1],r=e[c][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(i=!1,r<n&&(n=r));if(i){e.splice(c--,1);var a=d();void 0!==a&&(t=a)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,d,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var d,r,n=s[0],i=s[1],l=s[2],a=0;if(n.some((function(t){return 0!==e[t]}))){for(d in i)o.o(i,d)&&(o.m[d]=i[d]);if(l)var c=l(o)}for(t&&t(s);a<n.length;a++)r=n[a],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},s=self["webpackChunkvue2_todo"]=self["webpackChunkvue2_todo"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(7742)}));s=o.O(s)})();
//# sourceMappingURL=app.f60f7f49.js.map