const express = require('express');
const multer = require('multer');
const { importUsers, exportUsers, exportUsersCSV } = require('../controllers/user.controller');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/import', upload.single('file'), importUsers);
router.get('/export', exportUsers);
router.get('/export/csv', exportUsersCSV);

module.exports = router;