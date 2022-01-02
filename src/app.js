require('dotenv').config();
const express = require('express');

const IMAGE_DIR = process.env.IMAGE_DIR;

if(!IMAGE_DIR){
    console.error('IMAGE_DIR environment variable not set');
    process.exit(1);
}

const app = express();
const port = 3000;

app.use(express.static(IMAGE_DIR, {index: 'index.html'}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});