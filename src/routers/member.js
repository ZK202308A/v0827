

const memberRouters = {
  path: '/member',
  children: [
    {path:"login", component: () => import("../pages/member/LoginPage.vue")},
    {path:"logout", component: () => import("../pages/member/LogoutPage.vue")},
  ]
}


export default memberRouters