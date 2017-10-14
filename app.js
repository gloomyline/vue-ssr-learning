/*
* @Author: AlanWang
* @Date:   2017-10-14 00:01:59
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-10-14 12:41:35
*/

const fs = require('fs')

// Rendering a Vue instance

// Create a Vue instance
const Vue = require('vue')
// const app = new Vue({
//   template: '<div>Hello World</div>'
// })

// Create a renderer
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.template.html', 'utf-8')
})

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

// Intergrating with a server
const server = require('express')()

server.get('*', (req, res) => {
  const app = new Vue({
    el: '#app',
    data: {
      url: req.url
    },
    template: '<div>The visited URL is: {{ url }}</div>'
  })

  const context = {
    title: 'Hello',
    meta: `<meta charset="utf-8">`
  }

  renderer.renderToString(app, context).then(html => {
    res.send(html)
  }).catch(err => {
    res.status(500).end('Interal Server Error')
    return
  })
})

const port = 8080
server.listen(port, err => {
  if (err) console.log(err)
  console.log(`Server is running on port:${port}`)
})