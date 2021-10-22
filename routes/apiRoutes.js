const router = require('express').Router();
const saveData = require('/notes');

// GET request
router.get('/api/notes', function (req, res) {
    res.send('GET request to the homepage')
    saveData.retrieveNotes();
    .then(results => {res.status(200).json {}})
    .catch(err => {res.status(500).end(err.stack);
    })
  
// POST request
router.post('/api/notes', function (req, res) {
    
  })

// DELETE Request
router.delete('/api/notes/:id', function (req, res) {
   
})

// accessing router middleware
module.exports = router;