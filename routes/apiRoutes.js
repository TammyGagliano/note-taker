const router = require('express').Router();
const saveData = require('../db/saveData');


// GET request
router.get('/notes', function (req, res) {
    saveData
    .retrieveNotes();
    then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
});
  
// POST request
router.post('/notes', function (req, res) {
    saveData
    .addNote(req.body)
    then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
});

// DELETE Request
router.delete('notes/:id', function (req, res) {
    saveData
    .deleteNotes(req.params.title)
    then(notes => res.json({ ok: true }))
    .catch(err => res.status(500).json(err))
});

// accessing router middleware
module.exports = router;