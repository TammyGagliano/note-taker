const fs = require("fs");
// converts callback-based functions to promise-based functions
const util = require("util");
const { v4: uuidv4 } = require('uuid');

// Convert `fs.readFile()` into a function that takes the same parameters but returns a promise.
const readFromFile = util.promisify(fs.readFile);
const writeToNote = util.promisify(fs.writeFile);
class Save {
  write(note) {
    return writeToNote("../db/db.json", JSON.stringify(note));
  }
  read() {
    return readFromFile("../db/db.json");
  }

  // read the data 
  retrieveNotes() {
    return this.read().then(notes => {
      let parsedNotes;
        try {
  // the statement to be executed
        parsedNotes = [].concat(JSON.parse(notes));
    } catch (error) {
        parsedNotes = [];
    }
    return parsedNotes;
 })
}

  // write the data to the file
  addNote() {
    const title = note;
    const text = note;
      if (!title || !text) {
        throw new Error ('These fields cannot be blank!');
      }
      // Use UUID package to add unique ID
      const newNote = { title, text id: uuidv4() };
      // Retrieve notes and add the new note, write all the updated notes, return the newNote
      return this.retrieveNotes()
      .then(notes => [...notes, newNote])
      .then(updateNotes => this.write(updateNotes))
      .then(() => newNote);  // return note
    }

  deleteNotes(id) {
    return this.retrieveNotes()
    .then(notes => notes.filter(note => note.id !== id))
    .then(filteredNotes => this.write(filteredNotes));
  }
}

module.exports = new Save();
