const express = require('express');
const conn = require('../db');
const app = express();

let login = app.post('/login', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    if (email && password) {
        
        conn.query(`select * from users where email = '${req.body.email}' and senha = '${req.body.password}';`, (err, results) => {

            if (results.length > 0) {

                console.log(req.body);
                res.redirect('/');

            }else{

                res.send("Email ou senha incorreto!");
            }
        });
    
    }else{

        res.send("Informe seu email ou senha.");
    }

});

module.exports = login;