const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const { User } = require('./models');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/import', upload.single('file'), async (req, res) => {
  try {
    const workbook = XLSX.readFile(req.file.path);

    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet, { defval: '' });

    // Validate + Transform
    const users = data.map(row => ({
      name: row.name,
      email: row.email,
      age: Number(row.age)
    }));

    // Bulk insert
    await User.bulkCreate(users);

    res.send('Data imported successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Import failed');
  }
});