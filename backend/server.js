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
  db.any('select * from shows order by date') 
  .then(data => resp.json(data))
  .catch(next);
});

app.get('/api/shows/:id', (req, resp, next) => {
  let id = req.params.id;
  db.oneOrNone('select * from shows where id = $1', id)
    .then(data => {
      if (data) {
        resp.json(data);
      } else {
        resp.status(404);
        resp.json({
          message: "Show not found."
        });
      }
    })
    .catch(next);
});

app.post('/api/bookevent', (req, resp, next) => {
  let data = req.body;
  db.one(`
    insert into gig_requests
    values (default, $1, $2, $3, $4, $5)
    returning artist_name, artist_website, bio, email, phone
    `,
    [
      data.artist_name,
      data.artist_website,
      data.bio,
      data.email,
      data.phone
    ]
  )
.then(data => resp.json(data))
.catch(next);
});


app.listen(4000, () => console.log('Listening on 4000.'));
