const express = require('express');
const exphbs = require('express-handlebars');
const port = 3000;

// Create an express app
const app = express();

// set ip the handlebars engine
app.engine('.handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', '.handlebars');
app.set('views', './views');

// express app.use() method
app.use((req, res, next) => {

    console.log(`URL: ${req.url}`);
    req.name = 'Jackson';
    next();
});

// make the index route
app.get('/', (req, res) => {

    res.render('home');

});

// make the index route
app.get('/about', (req, res) => {

    res.render('about');

});

// app.post request
app.post('/', (req, res) => {});


// add about route
app.get('/about', (req, res) => {

    res.send(`This is the about page for WEBD6201`);


});

//add contact page
app.get('/contact', (req, res) => {

    // res.send(`This is the contact page for WEBD6201`);

});



// run server
app.listen(port, () => {

    console.log(`Server started on port ${port}`);

});