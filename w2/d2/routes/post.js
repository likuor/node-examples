const express = require('express');
const { sendRegister, sendLogin } = require('../controllers/userController');
const cookieSession = require('cookie-session');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.session);
  res.send('ssss');
});

module.exports = router;
