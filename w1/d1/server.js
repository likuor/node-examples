const http = require('http');

const server = http.createServer((request, response) => {
  console.log('URL', request.url);

  if (request.url === '/test') {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write('<h1>Hello Client in test!!!!!!</h1>');
  }

  if (request.url === '/cats') {
    response.setHeader('Content-type', 'text/html');
    response.write(
      '<img src=' +
        'https://content.wepik.com/statics/3272058/preview-page0.jpg' +
        '>'
    );
    response.end();
  }

  if (request.url === '/dogs') {
    response.setHeader('Content-type', 'text/html');
    response.write(
      '<img src=' +
        'https://www.kindpng.com/picc/m/120-1209732_dog-head-png-dog-meme-face-png-transparent.png' +
        '>'
    );
    response.end();
  }

  if (request.url === '/users') {
    response.setHeader('Content-type', 'text/html');
    response.write('<ul><li>Vini</li><li>Koki</li><li>Arthur</li></ul>');
    response.end();
  }

  if (request.url === '/products') {
    response.setHeader('Content-type', 'text/html');
    response.write(
      '<ul><li>Pen</li><li>Pineapple</li><li>Apple</li><li>Pen</li></ul>'
    );
    response.end();
  }

  response.end();
});

server.listen(8000, () => console.log('Server is running on port 8000'));
