/*
* @Author: AlanWang
* @Date:   2017-10-14 13:01:56
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-10-14 14:16:56
*/

const createApp = require('/path/to/built-server-bundle.js')

const fs = require('fs')
const server = require('express')()

// Create a renderer
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.template.html', 'utf-8')
})

server.get('*', (req, res) => {
  const httpContext = { url: req.url }

  createApp(httpContext).then(app => {
    const context = {
      title: 'Hello',
      meta: `<meta charset="utf-8">`
    }
    renderer.renderToString(app, context).then(html => {
      res.send(html)
    }).catch(err => {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Interal Server Error')
      }
    })
  })
})

const port = 8080
server.listen(port, err => {
  if (err) console.log(err)
  console.log(`Server is running at: ${port}`)
})