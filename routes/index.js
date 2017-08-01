let express = require('express')
let app = require('../server')
let router = require('express').Router()
let db = require('../db')

router.get('/', (req, res) => {
  res.send('sup dawg')
})

router.post('/')

router.post('/user/milestones', (req, res) => {
  console.log('bloop')
  db.Goal.findAll().then( (goals) => {
    res.send(goals)
  })
})

router.get('/user/milestones', (req,res) => {
  console.log('bloop')
  db.Goal.findAll().then( (goals) => {
  res.send(goals)
  })
})

router.get('/login')

router.post('/login')

router.get('/logout')

//ask to login after 5 tries

module.exports = router