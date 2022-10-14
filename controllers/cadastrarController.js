const express = require('express');
const conn = require('../db');
const app = express();

let cadastro = app.post('/cadastrar', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    if (email && password) {

        conn.query(`select * from users where email = '${email}';`, (err, results) => {

            if (results.length === 0) {

                conn.query(`insert into users (email, senha) values('${email}', '${password}');`, (err, results) => {
                    res.redirect('/login');
                });

            } else {
                
                res.send("Email ou senha incorreto!");
                console.log("Email ou senha incorreto!");
            }
        });

    } else {
        res.send("Informe os valores nos campos");
    }
});

module.exports = cadastro;