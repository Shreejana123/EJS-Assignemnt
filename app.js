const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("This is a home page.");
})

app.get('/tutorial', function (req, res) {
    res.render('index', {'name': 'Shreejana'})
})

app.listen(3000, ()=>{
    console.log("listening to the port 3000...");
})