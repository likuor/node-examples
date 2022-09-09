const http = require('http');
const fs = require('fs');
const url = require('url');
const usersJson = './users.json';
const qs = require('querystring');

const server = http.createServer((request, response) => {
  const userId = url.parse(request.url, true).query;

  fs.readFile(usersJson, 'utf8', function (error, data) {
    if (error) return console.log(error);

    return (users = JSON.parse(data));
  });

  if (request.url === '/') {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write('<h1>Hello Client in test!!!!!!</h1>');
    response.end();
  }

  if (request.url === '/getUsers') {
    fs.readFile(usersJson, 'utf8', function (error, data) {
      if (error) return console.log(error);

      console.log('json file', data);
      response.write(JSON.stringify({ ...users }));
      response.end();
    });
  }

  if (request.url === '/createUsers') {
    fs.readFile(usersJson, function (error, data) {
      if (error) return console.log(error);

      users.users.push({
        id: users.users.length + 1,
        name: 'Koki',
        country: 'Brazil',
      });
      fs.writeFile(usersJson, JSON.stringify(users), function (error) {
        if (error) return console.log(error);
      });
      response.write(JSON.stringify({ ...users }));
      response.end();
    });
  }

  if (request.url === '/deleteUsers') {
    fs.readFile(usersJson, 'utf8', function (error, data) {
      if (error) return console.log(error);

      // users.users.filter((user) => user.id === userId);
      // response.write(JSON.stringify({ ...users }));
      console.log(userId);
      response.end();
    });
  }

  if (request.url === '/readFile') {
    fs.readFile('index.html', 'utf8', (error, data) => {
      if (error) {
        console.log('error on read file', error);
      }
      console.log('content file', data);
      response.writeHead(200, { 'content-type': 'text/html' });
      response.write(data);
      response.end();
    });
  }
  if (request.url === '/writeFile') {
    fs.writeFile(
      'index2.html',
      '<h1>File updated instead of created!</h1>',
      (error) => {
        if (error) {
          console.log('error on create file', error);
        }
        response.writeHead(200, { 'content-type': 'application/json' });
        response.write(JSON.stringify({ message: 'File created.' }));
        response.end();
      }
    );
  }
  if (request.url === '/updateFile') {
    console.log('dirname', __dirname);
    fs.appendFile(
      __dirname + '/newFolder/index.html',
      '<h1>Content appended</h1>',
      (error) => {
        if (error) {
          console.log('error on update file', error);
        }
        response.writeHead(200, { 'content-type': 'application/json' });
        response.write(JSON.stringify({ message: 'File updated.' }));
        response.end();
      }
    );
  }
  if (request.url === '/deleteFile') {
    fs.unlink('index2.html', (error) => {
      if (error) {
        console.log('error on delete file', error);
      }
      response.writeHead(200, { 'content-type': 'application/json' });
      response.write(JSON.stringify({ message: 'File deleted.' }));
      response.end();
    });
  }
  if (request.url === '/renameFile') {
    fs.rename('index.html', 'main.html', (error) => {
      if (error) {
        console.log('error on rename file', error);
      }
      response.writeHead(200, { 'content-type': 'application/json' });
      response.write(JSON.stringify({ message: 'File renamed.' }));
      response.end();
    });
  }
  if (request.url === '/createFolder') {
    fs.mkdir('newFolder', (error) => {
      if (error) {
        console.log('error on create folder', error);
      }
      response.writeHead(200, { 'content-type': 'application/json' });
      response.write(JSON.stringify({ message: 'Folder created.' }));
      response.end();
    });
  }
  if (request.url === '/users') {
    console.log('method', request.method);
    let data = '';
    let jsonData = {};
    request.on('data', (chunk) => {
      data += chunk;
    });
    request.on('end', () => {
      console.log('data', JSON.parse(data));
      jsonData = { ...JSON.parse(data) };
    });
    response.writeHead(200, { 'content-type': 'application/json' });
    response.write(JSON.stringify({ users }));
    response.end();
  }
});

server.listen(8000, () => console.log('Server running on port 8000'));
