// =======================================IMPORTS====================================
const http = require('http');
const html = require('./data').html;
const jsonData = require('./data').jsonData;
const uuidv4 = require('./data').uuidv4;

// ========================================SERVER===================================
const server = http.createServer((request, response) => {
  const urlString = request.url;
  const urlArray = urlString.split('/');
  if (urlArray[1] === 'html') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(html);
    response.end();
  } else if (urlArray[1] === 'json') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(jsonData));
    response.end();
  } else if (urlArray[1] === 'uuid') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ uuid: uuidv4() }));
    response.end();
  } else if (urlArray[1] === 'status') {
    response.writeHead(Number(urlArray[2]), {
      'Content-Type': 'text/html',
    });
    response.write(`<h1>Returned ${Number(urlArray[2])} as Status Code</h1>`);
    response.end();
  } else if (urlArray[1] === 'delay') {
    setTimeout(
      () => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(
          `<h1>Displaying this message after ${Number(
            urlArray[2],
          )} seconds.</h1>`,
        );
        response.end();
      },
      Number(urlArray[2]) * 1000,
    );
  }
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Listening on port number 8080');
});
