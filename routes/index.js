let express = require('express')
let app = require('../server')
let router = require('express').Router()
let db = require('../db')

router.get('/', (req, res) => {
  res.send('sup dawg')
})

router.post('/')

router.get('/user/foo', (req,res) => {
  console.log('get a dummy user')
  db.User.find( { email: "foo@bar.com" }).then( (user) => {
    console.log(`user is ${user}`)
  res.send(user)
  })
})

router.post('/user/foo/nextGoal', (req,res) => {
  console.log('increment dummy users goal')
  db.User.upsert( { goalId: req.body.newGoal }, { where: { email: "foo@bar.com" }}).then( (wasUpdated) => {
    console.log(`was this updated? ${wasUpdated}`)

    //grab next goal requirements
    db.Goal.findById(req.body.newGoal).then( goal => {
      res.send(goal)
    })
  })
})


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