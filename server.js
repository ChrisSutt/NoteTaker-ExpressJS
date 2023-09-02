const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import and apply API and main routes
require('./routes/apiRoutes')(app);
require('./routes/mainRoutes')(app);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
