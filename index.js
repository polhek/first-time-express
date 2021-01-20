const express = require('express');
const path = require('path');
const fs = require('fs');

// Initializint express ...
const app = express();

// setting up static page...

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
