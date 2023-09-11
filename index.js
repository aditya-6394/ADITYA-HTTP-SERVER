const http = require('http');

const html = `<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
      <p> - Martin Fowler</p>

  </body>
</html>`;
const jsonData = {
  slideshow: {
    author: 'Yours Truly',
    date: 'date of publication',
    slides: [
      {
        title: 'Wake up to WonderWidgets!',
        type: 'all',
      },
      {
        items: [
          'Why <em>WonderWidgets</em> are great',
          'Who <em>buys</em> WonderWidgets',
        ],
        title: 'Overview',
        type: 'all',
      },
    ],
    title: 'Sample Slide Show',
  },
};
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

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
