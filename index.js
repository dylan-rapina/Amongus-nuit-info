const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/youwon', (req, res) => res.render('pages/youwon'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  //.use(favicon(path.join(__dirname,'public','images','IconeWeb.PNG')));