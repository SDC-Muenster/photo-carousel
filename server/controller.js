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

const Read = (req, res) => {
  db.HomeSet.find({ home_id: req.query.id })
    .then((homes) => {
      if (homes.length === 0) {
        res.sendStatus(204);
      } else {
        res.send(homes);
      }
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
