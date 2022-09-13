const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const userData = req.cookies.user;
  const userInfo = req.body;
  console.log(userInfo);

  if (!userData) return res.redirect('/register');
  if (!userData.isLoggedin) return res.send('You need to login');
  res.render('home', { name: userData.name });
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const user = { ...req.body, isLoggedin: false };
  res.cookie('user', user);
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const userInfo = req.body;
  let userData = req.cookies.user;

  if (
    userInfo.email !== userData.email ||
    userInfo.password !== userData.password
  )
    return res.send('login is failed');

  userData = { ...userData, isLoggedin: true };
  res.cookie('user', userData);
  res.redirect('/');
});

app.post('/logout', (req, res) => {
  res.clearCookie('user');
  console.log('logout is success');
  res.redirect('/register');
});

app.listen('8000', console.log('server running port at 8000'));
