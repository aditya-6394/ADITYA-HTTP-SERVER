// ===================================HTML DATA===================================

const html = `<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
      <p> - Martin Fowler</p>

  </body>
</html>`;

// ===================================JSON DATA===================================

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

// ===================================UUID FUNCTION===================================

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// ==================================EXPORTS=========================================

module.exports.html = html;
module.exports.jsonData = jsonData;
module.exports.uuidv4 = uuidv4;
