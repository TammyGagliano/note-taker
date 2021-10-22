const router = require('express').Router();
const saveData = require('/notes');

// GET request
router.get('/notes', function (req, res) {
    res.send('GET request to the homepage')
    saveData.retrieveNotes();



  })

// POST request
  router.post('/', function (req, res) {
    res.send('Birds home page')
  })

// DELETE Request
  router.delete('/about', function (req, res) {
    res.send('About birds')
  })

module.exports = router;