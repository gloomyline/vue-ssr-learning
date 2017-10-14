/*
* @Author: AlanWang
* @Date:   2017-10-14 13:47:28
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-10-14 15:24:43
*/

import { createApp } from './app'

// client-specific bootstrapping logic...

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  // Add router hook for handling asyncData
  // Doing it after initial route is resolved so that we don't double-feech
  // the data that we already have. Using 'router.beforeResolve()' so that
  // async components are resolved
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)

    // we only care about non-previously-rendered components,
    // so we compare them until the two matched lists differ
    let diffed = false
    const activated = matched.filter((component, index) => {
      return diffed || (diffed = (prevMatched[i] !== component))
    })

    if (!activated.length) {
      return next()
    }

    // this is where we should trigger a loading indicator if there is one
    
    Promise.all(activated.map(component => {
      if (component.asyncData) {
        return component.asyncData({store, route: to})
      }
    })).then(() => {
      // stop loading indicator
      next()
    }).catch(next)
  })

  // make sure async componets upfront before rendering at the route level
  app.$mount('#app')
})


