const Sequelize = require('sequelize')
const mysql = require('mysql2')

const seedUser = require('./seedUser.json')
const seedGoal = require('./seedGoal.json')

let sequelize = new Sequelize('mental_math','root','student', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize
  .authenticate()
  .then( () => {
    console.log('Connection has been established successfully.')
  })
  .catch( (err) => {
    console.error('Unable to connect to the database: ', err)
  })

const Goal = sequelize.define('goal', {
  goal: { type: Sequelize.STRING}
})

const User = sequelize.define('user', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
})

Goal.hasMany(User)
User.belongsTo(Goal)

sequelize.sync({force: true}).then( () => {
  return Goal.bulkCreate(seedGoal).then( () => {
    User.bulkCreate(seedUser)
  })
})