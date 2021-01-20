const express = require('express');
const path = require('path');
const fs = require('fs');

// Initializint express ...
const app = express();

// setting up static page...
app.use(express.static(path.join(__dirname, 'public')));

// catch error if page doesn't exist...
app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// port variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
