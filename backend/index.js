const express = require('express'); // Import Express framework
const app = express(); // Create an Express application instance

// Port to listen on (default is 3000)
const port = process.env.PORT || 3000;

// Basic route handler (responds with "Hello World!")
app.get('/', (req, res) => {
  res.send('Where to next?');
});

// Start the server and listen for requests
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
