// const cookieParser = require("cookie-parser");
const cookieSession = require('cookie-session');
const express = require('express');
const bcrypt = require('bcrypt');
const authRouter = require('./routs/auth');
const userRouter = require('./routs/user');

const app = express();

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(8080, () => console.log('server running 8080'));
