const router = require("express").Router();
const fs = require("fs");
const path = require("path");
// const saveData = require('../db/saveData.js');

module.exports = (router) => {
  //Set up notes variable"
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);

    // GET request
    router.get("/notes", function (req, res) {
      // Read the db.json file and return all saved notes as JSON.
      res.json(notes);
    });

    // POST request
    router.post("/api/notes", function (req, res) {
      // Receives a new note, adds it to db.json, and returns a new note
      let newNote = req.body;
      notes.push(newNote);
      updateDb();
    });

    // DELETE Request
    router.delete("/api/notes/:id", function (req, res) {
      notes.splice(req.params.id, 1);
      updateDb();
    });

    //updates the json file whenever a note is added or deleted
    function updateDb() {
      fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
        if (err) throw err;
        return true;
      });
    }
  });
};
// accessing router middleware
module.exports = router;
