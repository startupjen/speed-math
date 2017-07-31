let express = require('express')
let app = require('../server')
let router = require('express').Router()

router.get('/', (req, res) => {
  res.send('sup dawg')
})

router.post('/')

router.post('/user/milestones')

router.get('/user/milestones')

router.get('/login')

router.post('/login')

router.get('/logout')

//ask to login after 5 tries

module.exports = router