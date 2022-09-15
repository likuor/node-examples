const express = require('express');
const { sendRegister, sendLogin } = require('../controllers/userController');
const cookieSession = require('cookie-session');

const router = express.Router();

router.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  })
);

router.get('/register', (req, res) => {
  res.render('../views/register');
});

router.post('/register', async (req, res) => {
  await sendRegister(req, res);
});

router.get('/login', (req, res) => {
  res.render('../views/login');
});

router.post('/login', async (req, res) => {
  await sendLogin(req, res);
});
module.exports = router;
