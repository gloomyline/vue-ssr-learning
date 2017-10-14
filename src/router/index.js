/*
* @Author: AlanWang
* @Date:   2017-10-14 13:59:31
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-10-14 14:27:57
*/

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('./components/Home.vue')
      },
      {
        path: '/item/:id',
        component: () => import('./components/Item.vue')
      }
    ]
  })
}