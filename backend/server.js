/*jshint esversion: 6 */
const express = require('express');
const Promise = require('bluebird');
const pgp = require('pg-promise')({
  promiseLib: Promise
});
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const cors = require('cors');

const db = pgp({
  database: 'venue_db'
});

const app = express();
app.use(cors());

app.use(bodyParser.json());


app.get('/api/shows', (rep, resp, next) => {
  db.any('select * from ')
})


app.listen(4000, () => console.log('Listening on 4000.'));
