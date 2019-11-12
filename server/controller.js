/* eslint-disable no-console */
const db = require('../database/index');

const Console = console;

const Create = (req, res) => {
  Console.log(req.body);
  const queryArgs = [req.body.id, req.body.title, req.body.location, req.body.cost, req.body.rating, req.body.reviews, req.body.type, req.body.favorite, req.body.similarhomes, req.body.photos];
  const queryStr = 'INSERT INTO newhomes VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
  db.query(queryStr, queryArgs)
    .then (() => {
      // console.log('create success');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('create fail', err);
      res.sendStatus(500);
    });
};

// read from homes table (NOT IN USE)
const _Read = (req, res) => {
  const { id } = req.query;
  const queryStr = 'SELECT similarhomes FROM homes WHERE id = ($1)';

  db.query(queryStr, [id])
    .then((data) => {
      // console.log(data.rows[0].similarhomes);
      const similarHomesIds = data.rows[0].similarhomes;
      const homes = [];
      const promises = similarHomesIds.map((similarHomeId) => (
        db.query('SELECT * FROM homes WHERE id = ($1)', [similarHomeId])
          .then((home) => {
            homes.push(home.rows[0]);
          })
          .catch((err) => {
            console.error('read fail', err);
            res.sendStatus(500);
          })
      ));
      Promise.all(promises)
        .then(() => {
          // console.log('>>>', homes);
          res.json(homes);
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// read from newhomes and homerelations table;
const Read = (req, res) => {
  const { id } = req.query;
  const queryStr = 'SELECT * FROM newhomes INNER JOIN homerelation ON newhomes.id = homerelation.similarhomeid WHERE homerelation.homeid = $1';

  db.query(queryStr, [id])
    .then((data) => {
      // console.log(data.rows);
      res.json(data.rows);

    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });

};

const Update = (req, res) => {
  const queryArgs = [req.body.id, req.body.title, req.body.location, req.body.cost, req.body.rating, req.body.reviews, req.body.type, req.body.favorite, req.body.similarhomes, req.body.photos];
  const queryStr = 'UPDATE newhomes SET title = $2, location = $3, cost = $4, rating = $5, reviews = $6, type = $7, favorite = $8, similarhomes = $9, photos = $10 WHERE id = $1';
  db.query(queryStr, queryArgs)
    .then((result) => {
      console.log('update success', result.rowCount);
      res.sendStatus(202);
    })
    .catch((err) => {
      console.log('update fail', err);
      res.sendStatus(500);
    });
};

const Delete = (req, res) => {
  const queryArgs = [req.query.id];
  // console.log(req.body.id);
  const queryStr = 'DELETE FROM newhomes WHERE id = $1';
  db.query(queryStr, queryArgs)
    .then((result) => {
      console.log('delete success', result.rowCount);
      res.sendStatus(202);
    })
    .catch((err) => {
      console.log('delete fail', err);
      res.sendStatus(500);
    });
};

module.exports = {
  Create,
  Read,
  Update,
  Delete,
};
