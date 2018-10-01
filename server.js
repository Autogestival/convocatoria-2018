var express = require('express')
var bodyParser = require('body-parser')

var registroRoutes = require('./routes/registro')
var viewRoutes = require('./routes/views')

var app = express()

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))

//
app.use('/api/registros', registroRoutes)
app.use('/', viewRoutes)

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})
