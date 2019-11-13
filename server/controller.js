const db = require('../database/index');

const Create = (req, res) => {
  const queryArgs = [req.body.id, req.body.title, req.body.location, req.body.cost, req.body.rating,
    req.body.reviews, req.body.type, req.body.favorite, req.body.similarhomes, req.body.photos];
  const queryStr = 'INSERT INTO newhomes VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
  db.query(queryStr, queryArgs)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('create fail', err);
      res.sendStatus(500);
    });
};

/** read from homes table, NOT IN USE */
// eslint-disable-next-line no-unused-vars
const $Read = (req, res) => {
  const { id } = req.query;
  const queryStr = 'SELECT similarhomes FROM homes WHERE id = ($1)';
  db.query(queryStr, [id])
    .then((data) => {
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
          res.json(homes);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

/** read from newhomes and homerelations tables */
const Read = (req, res) => {
  const { id } = req.query;
  const queryStr = 'SELECT * FROM newhomes INNER JOIN homerelation ON newhomes.id = homerelation.similarhomeid WHERE homerelation.homeid = $1';
  db.query(queryStr, [id])
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const Update = (req, res) => {
  const queryArgs = [req.body.id, req.body.title, req.body.location, req.body.cost, req.body.rating,
    req.body.reviews, req.body.type, req.body.favorite, req.body.similarhomes, req.body.photos];
  const queryStr = 'UPDATE newhomes SET title = $2, location = $3, cost = $4, rating = $5, reviews = $6, type = $7, favorite = $8, similarhomes = $9, photos = $10 WHERE id = $1';
  db.query(queryStr, queryArgs)
    .then((_result) => {
      // console.log('update success', result.rowCount);
      res.sendStatus(202);
    })
    .catch((err) => {
      console.error('update fail', err);
      res.sendStatus(500);
    });
};

const Delete = (req, res) => {
  const queryArgs = [req.query.id];
  const queryStr = 'DELETE FROM newhomes WHERE id = $1';
  db.query(queryStr, queryArgs)
    .then((_result) => {
      // console.log('delete success', result.rowCount);
      res.sendStatus(202);
    })
    .catch((err) => {
      console.error('delete fail', err);
      res.sendStatus(500);
    });
};

module.exports = {
  Create,
  Read,
  Update,
  Delete,
};
