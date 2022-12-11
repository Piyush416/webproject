const express = require('express');
const { rmSync } = require('fs');
const hbs = require('hbs');
const app = express();
const path = require('path');
const { setUncaughtExceptionCaptureCallback } = require('process');
const port = process.env.PORT || 2022;

// Absoulte path
const staticPath = path.join(__dirname , '../public');
const templates_path = path.join(__dirname , '../templates/views');
const partials_path = path.join(__dirname , '../templates/partials');


// set view engine
app.set('view engine' , 'hbs');
app.set('views' , templates_path);
hbs.registerPartials(partials_path);


// for adding css we have to add static files in your main page
app.use(express.static(staticPath));



app.get('/', (req, res) => {
    res.render('index');
})


app.get('/about', (req, res) => {
    res.render('about');
})


app.get('/weather', (req, res) => {
    res.render('weather');
})


app.get('*', (req, res) => {
    res.render("404error" , {
        errorMsg: 'Opps! Page Not Found'
    });
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log("Server is live Baby!!");
})