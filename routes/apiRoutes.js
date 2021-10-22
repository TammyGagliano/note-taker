const router = require('express').Router();
const saveData = require('/notes');
// Helper method for generating unique ids
const uuid = require('./helper/uuid');

// GET request
router.get('./notes', function (req, res) {
    store
    .retrieveNotes();
    then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
});
  
// POST request
router.post('./notes', function (req, res) {
    store
    .addNote(req.body)
    then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
});

// DELETE Request
router.delete('./notes/:title', function (req, res) {
    store
    deleteNotes(req.params.title)
    then(notes => res.json({ ok: true }))
    .catch(err => res.status(500).json(err))
});

// accessing router middleware
module.exports = router;