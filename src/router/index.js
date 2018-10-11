import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home'
import Catogry from 'pages/Catogry'
import Rank from 'pages/Rank'
import Search from 'pages/Search'
import Disc from 'components/Disc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
     
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/catogry',
      name: 'catogry',
      component: Catogry,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
