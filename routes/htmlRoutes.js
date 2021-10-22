const path = require('path');
const router = require('express').Router();

// Get notes.html if the URL is localhost:3001/notes
app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// if no matching route is found default to home page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

module.exports = router;
