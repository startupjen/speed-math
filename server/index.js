const express = require('express')
const bodyParser = require('body-parser')
const router = require('../routes')

let path = require('path')
let app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended: true}) )
app.use( express.static(path.resolve(__dirname,'../client/dist/')) )
app.use('/', router)

let PORT = 3939

app.listen(PORT, () => {
  console.log(`Connected to PORT ${PORT} successfully`)
})
 
module.exports = app