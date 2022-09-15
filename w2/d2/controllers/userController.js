const bcrypt = require('bcrypt');
const users = require('../models/user.json');

const sendRegister = async (req, res) => {
  const hashPassword = async (password, saltRounds) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    // const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  };
  const { name, username, password } = req.body;
  const hashedPassword = await hashPassword(password, 12);
  users[username] = { name, username, password: hashedPassword };
  res.cookie('username', username);
  res.send('user created');
};

const sendLogin = async (req, res) => {
  const receivedUsername = req.body.username;
  const receivedPassword = req.body.password;
  const user = users[receivedUsername];
  if (!user) return res.send('invalid username');
  const isMatch = await bcrypt.compare(receivedPassword, user.password);
  console.log('isMatch', isMatch);
  if (isMatch) {
    // res.cookie("username", user.username);
    req.session.username = user.username;
    return res.send('You are logged in');
  }
  res.send('invalid password');
};

module.exports = { sendRegister, sendLogin };
