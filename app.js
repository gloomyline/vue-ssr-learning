/*
* @Author: AlanWang
* @Date:   2017-10-14 00:01:59
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-10-14 00:21:50
*/

// Rendering a Vue instance

// Create a Vue instance
const Vue = require('vue')
// const app = new Vue({
//   template: '<div>Hello World</div>'
// })

// Create a renderer
const renderer = require('vue-server-renderer').createRenderer()

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
    data: {
      url: req.url
    },
    template: '<div>The visited URL is: {{ url }}</div>'
  })

  renderer.renderToString(app).then(html => {
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
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