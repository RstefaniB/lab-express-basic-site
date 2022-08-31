const express = require('express');

const hbs = require('hbs');
const path = require('path');


const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index', { layout: false })
});


app.get('/about', (req, res) => {
    res.render('about')
});


app.get('/works', (req, res) => {
    res.render('works')
});


app.get('/photo_gallery', (req, res) => {
    res.render('photo_gallery')
})

app.listen(3000, () => console.log('🏃‍ on port 3000'));