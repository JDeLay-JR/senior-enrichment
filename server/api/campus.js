const router = require('express').Router()
const Campuses = require('../db/models/campus.js')
const Students = require('../db/models/students.js')


router.post('/newCampus', (req, res, next) => {
  Campuses.create(req.body.newCampus)
  .then(newCampus => res.send(newCampus))
})

router.delete('/:campusId', (req, res, next) => {
  const id = req.params.campusId;
  Campuses.destroy({where: {id}})
  .then(() => res.sendStatus(204))
  .catch(next)
})

router.get('/', (req, res, next) => {
  console.log(Campuses)
  Campuses.findAll()
  .then(campuses => res.send(campuses))
  .catch(next)
})

module.exports = router
