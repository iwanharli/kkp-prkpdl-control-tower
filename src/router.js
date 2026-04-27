import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import PrintView from './views/PrintView.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/print',
    name: 'Print',
    component: PrintView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
