/*
* @Author: AlanWang
* @Date:   2017-10-14 00:01:59
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-10-14 14:41:03
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
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

// export a factory for creating fresh app, router and store
export function createApp() {
  // create router and store instances
  const router = createRouter()
  const store = createStore()

  // sync so that route state is available as part of the store
  sync(store, router)

  // create the app instance, injecting both the router and the store
  const app = new Vue({
    router,
    store,
    // the root instance simply renders the App componetn
    render: h => h(app)
  })

  // expose the app, the router and the store
  return { app, router, store }
}

