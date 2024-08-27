import { createApp } from 'vue'
import App from './App.vue'
import MainPage from './pages/MainPage.vue'
import AboutPage from './pages/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css';

const routes = [
  {path: "/", component: MainPage },
  {path: "/about", component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

createApp(App)
.use(router)
.mount('#app')
