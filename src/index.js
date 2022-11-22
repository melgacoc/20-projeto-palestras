const express = require('express');
const bodyParser = require('body-parser');
const { talkers } = require('./helpers');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar a
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  const response = await talkers();
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log('Online');
});