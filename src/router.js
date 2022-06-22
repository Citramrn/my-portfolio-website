import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Main.vue'
import Projects from './views/Projects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/all-projects',
      name: 'project',
      component: Projects
    }
  ]
})
