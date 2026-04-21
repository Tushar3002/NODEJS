const express = require('express');
const multer = require('multer');
const { importUsers, exportUsers, exportUsersCSV, exportZip, exportJSZip } = require('../controllers/user.controller');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/import', upload.single('file'), importUsers);
router.get('/export', exportUsers);
router.get('/export/csv', exportUsersCSV);
router.get('/export/zip', exportZip);
router.get('/export/jszip', exportJSZip);

module.exports = router;