const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.get('/', (context, req, res) => {
  const HTML = renderView({
    title: 'My Webtask View',
    body: '<h1>Simple webtask view</h1>',
    color: '#CACACA'
  });

  res.set('Content-Type', 'text/html');
  res.status(200).send(HTML);
});

module.exports = fromExpress(app);

function renderView(locals) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${locals.title}</title>
    </head>
    <style>
    h1 {
        color: ${locals.color}
    }
    </style>
    <body>
      ${locals.body}
    </body>
    </html>
  `;
}