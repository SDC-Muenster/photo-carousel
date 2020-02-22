import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import App from '../client/app.jsx';
import controller from './controller';

const Console = console;

const app = express();
const port = process.env.PORT || 3022;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.get('/', (req, res) => {
  const reactHtml = ReactDOMServer.renderToString(<App />);
  const indexFile = '/Users/jenny/dev/hrr41/sdc/more-homes-module/public/index.html';
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error Message >', err);
      return res.status(500).send('Oops!');
    }
    res.send(data.replace('<div id="more"></div>', `<div id="more">${reactHtml}</div>`));
  });
});
app.post('/homes', controller.Create);
app.get('/homes', controller.Read);
app.put('/homes', controller.Update);
app.delete('/homes', controller.Delete);

app.listen(port, () => {
  Console.log(`Listening on port ${port}`);
});
