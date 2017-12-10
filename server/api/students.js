const router = require('express').Router()
const Students = require('../db/models/students.js')
const Campus = require('../db/models/campus.js')


// //Get student by their ID
// router.get('/:id', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   Students.findById(id)
//   .then(studentById => res.send(studentById))
//   .catch(next);
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

// //Post a new student to the DB
// router.post('/newStudent', (req, res, next) => {
//   Students.create({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     gpa: req.body.gpa
//   })
//   .then(newStudent => res.send(newStudent))
//   .catch(next)
// })

//Delete a student from the DB

module.exports = router
