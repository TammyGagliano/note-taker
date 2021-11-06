// converts callback-based functions to promise-based functions
const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Convert `fs.readFile()` into a function that takes the same parameters but returns a promise.
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Save {
  read() {
    return readFileAsync("../db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("../db/db.json", JSON.stringify(note));
  }

  // read the data 
  async retrieveNotes() {
    const notes = await this.read();
    let parsedNotes;
    try {
      // the statement to be executed
      parsedNotes = [].concat(JSON.parse(notes));
    } catch (err) {
      parsedNotes = [];
    }
    return parsedNotes;
}

  // write the data to the file
  async addNote(note) {
    const title = note;
    const text = note;
      if (!title || !text) {
        throw new Error ('These fields cannot be blank!');
      }
      // Use UUID package to add unique ID
      const newNote = { title, text, id: uuidv4() };
      // Retrieve notes and add the new note, write all the updated notes, return the newNote
      const notes = await this.retrieveNotes();
    const updateNotes = [...notes, newNote];
    await this.write(updateNotes);
    return newNote;  // return note
    }

  async deleteNote(id) {
    const notes = await this.retrieveNotes();
    const filteredNotes = notes.filter((note) => note.id !== id);
    return await this.write(filteredNotes);
  }
}

module.exports = new Save();
