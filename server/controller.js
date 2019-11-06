/* eslint-disable no-console */
const db = require('../database/index');

const Console = console;

const Create = (req, res) => {
  Console.log(req.body);
  db.HomeSet.create(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// update read controller
const Read = (req, res) => {
  const { id } = req.query;
  const queryStr = 'SELECT similarHomesOne, similarHomesTwo, similarHomesThree, similarHomesFour, similarHomesFive, similarHomesSix, similarHomesSeven, similarHomesEight, similarHomesNine, similarHomesTen FROM homes WHERE id = ($1)';

  db.query(queryStr, [id])
    .then((homeIdsObj) => {
      const similarHomesIds = Object.values(homeIdsObj.rows[0]);
      const homes = [];
      const promises = similarHomesIds.map((similarHomeId) => (
        db.query('SELECT * FROM homes WHERE id = ($1)', [similarHomeId])
          .then((home) => {
            homes.push(home.rows[0]);
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          })
      ));
      Promise.all(promises)
        .then(() => {
          console.log('>>>', homes);
          res.json(homes);
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const Update = (req, res) => {
  db.HomeSet.findOneAndUpdate({ home_id: req.query.id }, req.body)
    .then(() => res.sendStatus(202))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const Delete = (req, res) => {
  db.HomeSet.findOneAndDelete({ home_id: req.query.id })
    .then(() => res.sendStatus(202))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  Create,
  Read,
  Update,
  Delete,
};
