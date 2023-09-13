const express = require('express');
const html = require('./data').html;
const jsonData = require('./data').jsonData;
const uuidv4 = require('./data').uuidv4;
const app = express();

app.get('/html', (request, response) => {
  response.send(html);
});

app.get('/json', (request, response) => {
  response.send(jsonData);
});

app.get('/uuid', (request, response) => {
  response.send(uuidv4());
});

app.get('/status/:statusCode', (request, response) => {
  const statusCode = Number(request.params.statusCode);
  response
    .status(statusCode)
    .send(`<h1> Setting the status code of response to : ${statusCode}`);
});

app.get('/delay/:delayInSeconds', (request, response) => {
  const delay = Number(request.params.delayInSeconds);
  setTimeout(() => {
    response.send(`<h1>Displaying after ${delay} seconds</h1>`);
  }, delay * 1000);
});

// =========================ERROR HANDLING=====================================

app.listen(8080, (error) => {
  if (error) console.log("Couldn't start the server");
  console.log('Server has been started on port 8080');
});
