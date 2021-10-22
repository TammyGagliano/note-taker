const router = require('express').Router();
const saveData = require('../db/db.json');
// Helper method for generating unique ids
// const uuid = require('./helper/uuid');
// const util = require('./helper/util);

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