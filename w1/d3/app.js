// import express
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

// create an express app
const app = express();

// use middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const jsonData = fs.readFileSync('../d2/users.json', 'utf-8', (error, data) => {
  return data;
});

// middleware function
const logger = (req, res, next) => {
  console.log('Logging...');
  next();
};

let body = '';

// routes
app.get('/', logger, (req, res) => {
  res.send(jsonData);
});

app.post('/add', (req, res) => {
  const users = [...jsonData.users];
  // console.log(users);
  // const users = [...jsonData.users];
  // const newUser = { ...jsonBody, id: users.length + 1 };
  // const updatedUsers = [...users, newUser];
  // console.log('body', updatedUsers);
  // res.send(updatedUsers.toString());
});

// app.post('/new', logger, (req, res) => {
//   console.log('body', req.body);
//   res.send('add a new pet');
// });

// initialize the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
