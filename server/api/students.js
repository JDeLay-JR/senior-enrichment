const router = require('express').Router()
const Students = require('../db/models/students.js')
const Campus = require('../db/models/campus.js')


// router.put('/studentId', (req, res, next) => {
// const id = req.params.studentId

// })

router.delete('/:studentId', (req, res, next) => {
  const id = req.params.studentId;
  Students.destroy({where: {id}})
  .then(() => res.sendStatus(204))
  .catch(next)
})

//Get a list of all students
router.get('/', (req, res, next) => {
  Students.findAll()
  .then(students => res.send(students))
  .catch(next);
})

//Post a new student to the DB
router.post('/newStudent', (req, res, next) => {
  Students.create(req.body)
  .then(newStudent => res.send(newStudent))
  .catch(next)
})

//Delete a student from the DB

module.exports = router
