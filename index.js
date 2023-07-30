
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

  app.use(bodyParser.urlencoded( {extended: false}));
// middleware **********************
app.use( '/add-product',(req,res,next) => {
    res.send(`<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></input></form>`);

});

app.post('/product', (req,res,next) => {

    console.log(req.body); 
    res.redirect('/');

});

app.use('/',(req,res,next)=>{
   res.send(`<h1>"hello from express js</h1>`);
});


app.listen(4000);
