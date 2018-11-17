const express = require('express');

const router = express.Router();
const path = require('path');
const users = require('./users');
const login = require('./login');
const frontAuth = require('./auth/frontAuth');
const checkToken = require("./auth/checkToken");

router.post('/login', login.post);
router.get('/auth',frontAuth.get);
router.get('/getUser', checkToken, users.get);



router.get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname, '..', '..', 'client', 'build', 'index.html')
    );
  });

module.exports = router;
