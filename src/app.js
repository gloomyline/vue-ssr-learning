/*
* @Author: AlanWang
* @Date:   2017-10-14 00:01:59
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-10-14 14:11:52
*/

// Rendering a Vue instance

/**
 * Instead of directly createing a Vue instance,
 * expose a factory function that can be repeatedly excuted to
 * create fresh app instance for each request
 */
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

// export a factory for creating fresh app, router and store
export function createApp() {
  const app = new Vue({
    // inject router into root Vue instance
    router,
    // the root instance simply renders the App componetn
    render: h => h(app)
  })

  // return both the app and the router
  return { app, router }
}

