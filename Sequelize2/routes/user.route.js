const express = require('express');
const { insert } = require('../controllers/user.controller');
const router = express.Router();

router.post('/register', insert);

module.exports = {router}