// Dependencies 
const express = require('express');

// Point server to the route files 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Set Port
const PORT = 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener 
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
