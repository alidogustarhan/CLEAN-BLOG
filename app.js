const express = require('express');
const ejs=require('ejs');
const path=require('path');
const app = express();

app.get('/', (req, res) => {
  res.render('index');
  
});

app.get('/about', (req, res) => {
  res.render('about');
  
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
  
});




//MIDDLEWARES
app.use(express.static('public'));

//TEMPLATE ENGINE
app.set("view engine","ejs");






//Public klasrümüzü uygulamamıza kaydetmiş olduk.
const port = 3000;

app.listen(port, () => {});
