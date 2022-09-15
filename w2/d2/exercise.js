const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const users = {
  test: {
    name: 'Test',
    username: 'test',
    password: '$2b$12$Z4wPO.1ByHEehpCKCn3ElOsCmFE/Va4z98u6pSiBbRDLQv.u37miW',
  },
};

const saltRounds = 12;

const hashPassword = async (password, saltRounds) => {
  console.time('hashing');
  const salt = await bcrypt.genSalt(saltRounds);
  console.log('salt', salt);
  const hash = await bcrypt.hash(password, salt);
  console.timeEnd('hashing');
  console.log('hash', hash);
  //   const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  console.log('body', req.body);
  req.body.password = hashPassword(req.body.password, saltRounds);
  const { name, username, password } = req.body;
  console.log('username', username);
  users[username] = { name, username, password };

  console.log('users', users);
  res.cookie('username', username);
  res.send('user created');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const receivedUsername = req.body.username;
  const receivedPassword = req.body.password;
  const user = users[receivedUsername];
  if (!user) return res.send('invalid username');

  console.log(users.test.password);

  bcrypt.compare(users.test.password, users.test.password).then((result) => {
    console.log('result', result);
  });

  if (user.password === receivedPassword) {
    res.cookie('username', user.username);
    return res.send('You are logged in');
  }
  res.send('invalid password');
});

app.get('/profile', (req, res) => {
  const username = req.cookies.username;
  if (!username) return res.redirect('/login');
  const user = users[username];
  res.render('profile', { username: user.username, password: user.password });
});

app.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.redirect('/login');
});

app.listen(8081, () => console.log('server running 8081'));
