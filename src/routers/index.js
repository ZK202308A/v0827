import { createRouter, createWebHistory } from 'vue-router'
import todoRouters from './todo'

const MainPage = () => import("../pages/MainPage.vue")
const AboutPage = () => import("../pages/AboutPage.vue")

const routes = [
  {path: "/", component: MainPage },
  {path: "/about", component: AboutPage },
  todoRouters
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
