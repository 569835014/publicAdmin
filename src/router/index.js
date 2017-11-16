import Vue from 'vue'
import Router from 'vue-router'
import AppEntrance from '@/view/app/AppEntrance'
import list from './routerList'
import load from './load'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      redirect:'/home',
      component: AppEntrance,
      children:list
    },
  ]
})
