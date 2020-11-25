const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.port || 6000;
const fs = require('fs');
const { request } = require('http');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : conf.host,
  user : conf.user,
  password : conf.password,
  port : conf.port,
  database : conf.database,
});

connection.connect();

app.get('/api/registers', (req, res) => {
  connection.query(
    "select * from register", 
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));