// converts callback-based functions to promise-based functions
const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Convert `fs.readFile()` into a function that takes the same parameters but returns a promise.
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Save {
  read() {
    return readFileAsync("./db.json");
  }
  write(note) {
    return writeFileAsync("./db.json", JSON.stringify(note));
  }

  // read the data 
  getNotes() {
    return this.read().then(notes => {
      let parsedNotes;
        try {
  // the statement to be executed
        parsedNotes = [].concat(JSON.parse(notes));
    } catch (err) {
        parsedNotes = [];
    }
    return parsedNotes;
 });
}

  // write the data to the file
  addNote(note) {
    const title = note;
    const text = note;
      if (!title || !text) {
        throw new Error ('These fields cannot be blank!');
      }
      // Use UUID package to add unique ID
      const newNote = { title, text, id: uuidv4() };
      // Retrieve notes and add the new note, write all the updated notes, return the newNote
      return this.getNotes()
      .then(notes => [...notes, newNote])
      .then((updateNotes) => this.write(updateNotes))
      .then(() => newNote);  // return note
    }

  removeNote(id) {
    return this.getNotes()
    .then((notes) => notes.filter((note) => note.id !== id))
    .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Save();
