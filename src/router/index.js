import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import list from '../pages/pageList.vue'
import nav from '../pages/pageNav.vue'
import btn from '../pages/pageButton.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    },
    {
      path: '/btn',
      name: 'btn',
      component: btn
    }
  ]
})
