require('newrelic');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const controller = require('./controller');


const Console = console;

const app = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.post('/homes', controller.Create);
app.get('/homes', controller.Read);
app.put('/homes', controller.Update);
app.delete('/homes', controller.Delete);

app.listen(port, () => {
  Console.log(`Listening on port ${port}`);
});
