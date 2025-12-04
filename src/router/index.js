import { createRouter, createWebHistory } from 'vue-router'

import About from '../Pages/About.vue'
import Welcome from '../Pages/Welcome.vue'
import Contacts from '../Pages/Contacts.vue'
import Register from '../Auth/Register.vue'
import Catalog from '../Pages/Catalog.vue'
import Login from '../Auth/Login.vue'
import Info from '../Pages/Info.vue'
import Services from '../Pages/Services.vue'
import Help from '../Pages/Help.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/info', component: Info },
  { path: '/services', component: Services },
  { path: '/help', component: Help },
  { path: '/catalog', component: Catalog }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router