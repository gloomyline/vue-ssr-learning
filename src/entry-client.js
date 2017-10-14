/*
* @Author: AlanWang
* @Date:   2017-10-14 13:47:28
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-10-14 14:25:53
*/

import { createApp } from './app'

// client-specific bootstrapping logic...

const { app, router } = createApp()

// make sure async componets upfront before rendering at the route level
router.onReady(() => {
  app.$mount('#app')
})

