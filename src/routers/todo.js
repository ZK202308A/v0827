

const todoRouters = {
  path: "/todo", 
  component:() => import("../pages/todo/IndexPage.vue"),
  children: [
    {path: "", redirect: '/todo/list'},
    {path: "list", component:() => import("../pages/todo/TodoListPage.vue") },
    {path: "add", component:() => import("../pages/todo/TodoAddPage.vue") },
    {path: "read/:mno", component:() => import("../pages/todo/TodoReadPage.vue") },
    {path: "edit/:mno", component:() => import("../pages/todo/TodoEditPage.vue") },

  ] 
}

export default todoRouters