const router = require("express").Router();
//const { addNote } = require("../db/saveData");
const save =  require("../db/saveData");

 
    // GET request
    router.get("/notes", function (req, res) {
      // Read the db.json file and return all saved notes as JSON.
      save.getNotes().then((notes) => {
          return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
    });

    // POST request
    router.post("/notes", function (req, res) {
      // Receives a new note, adds it to db.json, and returns a new note
      save.addNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
    });

    // DELETE Request
    router.delete("/notes/:id", function (req, res) {
      save
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });
  
// accessing router middleware
module.exports = router;
