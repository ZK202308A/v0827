import { createApp } from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css';
import router from './routers';
import { createPinia } from 'pinia';


createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
