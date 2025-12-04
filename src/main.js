import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')

if (window.location.pathname === '/') {
  window.history.replaceState(null, null, '/Kursovaia-Maria-Tokman/');
}