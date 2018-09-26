import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./layouts/Brochure.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/brochure/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('./views/brochure/Register.vue')
        }
      ]
    },
    {
      path: '/',
      component: () => import('./layouts/Manager.vue'),
      children: [
        {
          path: '/manager',
          name: 'manager',
          component: () => import('./views/manager/Front.vue')
        }
      ]
    }
  ]
})
