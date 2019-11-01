const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const handler = require('./handler');

const Console = console;

const app = express();
const port = 3022;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// API
app.post('/homes', handler.Create);
app.get('/homes', handler.Read);
app.put('/homes', handler.Update);
app.delete('/homes', handler.Delete);

app.listen(port, () => {
  Console.log(`Listening on port ${port}`);
});
