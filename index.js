
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();

 app.use(bodyParser.urlencoded( {extended: false}));
// middleware **********************

app.use(adminRoutes);
app.use(shopRoutes);

app.get( (req,res,next) => {
   res.status(404);
   res.send(`<h1>Page Not Found</h1>`);
});




app.listen(4000);
