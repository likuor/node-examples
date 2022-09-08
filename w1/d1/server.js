const http = require('http');
const users = [
  { name: 'Vini', country: 'Brazil' },
  { name: 'Koki', country: 'Japan' },
  { name: 'Arthur', country: 'Brazil' },
];

const products = [
  { name: 'Pen', jenre: 'stationary' },
  { name: 'Pineapple', jenre: 'fruits' },
  { name: 'Apple', jenre: 'fruits' },
  { name: 'Pen', jenre: 'stationary' },
];

const server = http.createServer((request, response) => {
  console.log('URL', request.url);

  if (request.url === '/test') {
    response.writeHead(200, { 'Content-type': 'application/json' });
    response.write(JSON.stringify({ message: 'Test' }));
  }

  if (request.url === '/cats') {
    response.setHeader('Content-type', 'text/html');
    response.write(
      '<img src=' +
        'https://content.wepik.com/statics/3272058/preview-page0.jpg' +
        '>'
    );
  }

  if (request.url === '/dogs') {
    response.setHeader('Content-type', 'text/html');
    response.write(
      '<img src=' +
        'https://www.kindpng.com/picc/m/120-1209732_dog-head-png-dog-meme-face-png-transparent.png' +
        '>'
    );
  }

  if (request.url === '/users') {
    response.writeHead(200, { 'Content-type': 'text/html' });
    users.map((user) => {
      response.write(`<ul><li>${user.name} is from ${user.country}</li></ul>`);
    });
  }

  if (request.url === '/products') {
    response.writeHead(200, { 'Content-type': 'text/html' });
    products.map((product) => {
      response.write(
        `<ul><li>Jenre of ${product.name} is ${product.jenre}</li></ul>`
      );
    });
  }

  response.end();
});

server.listen(8000, () => console.log('Server is running on port 8000'));
