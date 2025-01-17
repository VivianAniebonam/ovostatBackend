const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Ovostat Backend is up!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
