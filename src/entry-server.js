/*
* @Author: AlanWang
* @Date:   2017-10-14 13:52:52
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-10-14 14:11:50
*/

import { createApp } from './app'

export defautl context => {
  // since there could potentially be asynchronous route hooks or componets,
  // we will be returning a Promise so that the server can wait until
  // everything is ready before rendering
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    // set server-side router's location
    router.push(context.url)

    // wait util router has resolved possible async components and hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // no matched routes, reject with 404
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      resolve(app)
    })
  }, reject)
}