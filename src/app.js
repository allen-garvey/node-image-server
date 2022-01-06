require('dotenv').config();
const path = require('path');
const express = require('express');
const serveIndex = require('serve-index');
const open = require('open');

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
  '/',
  express.static(path.join(__dirname, '..', 'public')),
);

app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Example app listening at ${url}`);

  if(process.env.NODE_ENV !== 'production'){
    open(url);
  }
});