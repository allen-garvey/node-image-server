require('dotenv').config();
const path = require('path');
const express = require('express');
const serveIndex = require('serve-index');

const IMAGE_DIR = process.env.IMAGE_DIR;

if(!IMAGE_DIR){
    console.error('IMAGE_DIR environment variable not set');
    process.exit(1);
}

const app = express();
const port = 3000;

app.use(
  express.static(IMAGE_DIR),
  serveIndex(IMAGE_DIR, {icons: true, template: path.join(__dirname, 'views', 'index.html')})
);

app.use(
  '/assets',
  express.static(path.join(__dirname, '..', 'public', 'assets')),
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});