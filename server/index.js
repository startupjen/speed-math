const express = require('express')
const bodyParser = require('body-parser')
const router = require('../routes')

let app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended: true}) )
app.use('/', router)
app.use( express.static('./client/dist') )

let PORT = 3939

app.listen(PORT, () => {
  console.log(`Connected to PORT ${PORT} successfully`)
})

module.exports = app