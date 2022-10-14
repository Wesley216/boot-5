const express = require('express');
const routes = require('./routes');
const path = require('path');
const login = require('./controllers/loginController');
const cadastro = require('./controllers/cadastrarController');

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use(login, cadastro);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})

