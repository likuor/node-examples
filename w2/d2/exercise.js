const express = require('express');

const app = express();

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);
app.use('/post', postRouter);

// app.get('/profile', (req, res) => {
//   const username = req.session.username;
//   if (!username) return res.redirect('/login');
//   const user = users[username];
//   res.render('profile', { username: user.username, password: user.password });
// });

// app.post('/logout', (req, res) => {
//   req.session = null;
//   res.redirect('/login');
// });

app.listen(8081, () => console.log('server running 8081'));
