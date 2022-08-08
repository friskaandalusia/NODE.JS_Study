const express = require('express');
const app = express();

app.use(express.static('public'));

// Hapus route di bawah
// Hapus sampai di sini

// Ganti URL milik route ke URL root
app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);
