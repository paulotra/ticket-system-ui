import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./layouts/Board.vue'),
      children: [
        {
          path: '/',
          name: 'login',
          component: () => import('./views/Browse.vue')
        },
      ]
    },
  ]
})
