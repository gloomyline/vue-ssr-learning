/*
* @Author: AlanWang
* @Date:   2017-10-14 00:01:59
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-10-14 13:07:57
*/

// Rendering a Vue instance

// Instead of directly createing a Vue instance,
// expose a factory function that can be repeatedly excuted to
// create fresh app instance for each request
const Vue = require('vue')

module.exports = function createApp(context) {
  return new Vue({
    data: {
      url: context.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })
}



// Render the Vue instance to HTML
// renderer.renderToString(app, (err, html) => {
//   if (err) throw err
//   console.log(html)
// })

// returns a Promise if no callback is passed
// renderer.renderToString(app).then(html => {
//   console.log(html)
// }).catch(err => {
//   console.log(err)
// })

