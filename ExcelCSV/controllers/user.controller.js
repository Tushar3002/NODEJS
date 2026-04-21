const User = require('../models/user.model');
const { parseExcel } = require('../services/excel.service');
const XLSX = require('xlsx');
const archiver = require('archiver');

const JSZip = require('jszip');

exports.importUsers = async (req, res) => {
  try {
    const filePath = req.file.path;

    const data = parseExcel(filePath);

    // Transform data
    const users = data.map(row => ({
      name: row.name,
      email: row.email,
      age: Number(row.age)
    }));

    await User.bulkCreate(users);

    res.json({
      message: 'Import successful',
      count: users.length
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Import failed' });
  }
};




exports.exportUsers = async (req, res) => {
  try {
    // 1. Get data from DB
    const users = await User.findAll({ raw: true });

    // 2. Convert JSON → Sheet
    const worksheet = XLSX.utils.json_to_sheet(users);

    // 3. Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

    // 4. Convert to buffer
    const buffer = XLSX.write(workbook, {
      type: 'buffer',
      bookType: 'xlsx'
    });

    // 5. Send as download
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=users.xlsx'
    );

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );

    res.send(buffer);

  } catch (error) {
    console.error(error);
    res.status(500).send('Export failed');
  }
};

exports.exportUsersCSV = async (req, res) => {
  try {
    // 1. Fetch data from DB
    const users = await User.findAll({ raw: true });

    // 2. (Optional) Format data
    const formatted = users.map(u => ({
      name: u.name,
      email: u.email,
      age: u.age
    }));

    // 3. Convert JSON → Sheet
    const worksheet = XLSX.utils.json_to_sheet(formatted);

    // 4. Convert Sheet → CSV
    const csv = XLSX.utils.sheet_to_csv(worksheet);

    // 5. Send file
    res.setHeader('Content-Disposition', 'attachment; filename=users.csv');
    res.setHeader('Content-Type', 'text/csv');

    res.send(csv);

  } catch (error) {
    console.error(error);
    res.status(500).send('CSV export failed');
  }
};


//using archiever
exports.exportZip = async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });

    // Convert to sheet
    const worksheet = XLSX.utils.json_to_sheet(users);

    // Create CSV & Excel
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const excelBuffer = XLSX.write(
      {
        SheetNames: ['Users'],
        Sheets: { Users: worksheet }
      },
      { type: 'buffer', bookType: 'xlsx' }
    );

    // Set response headers
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename=users.zip');

    // Create archive
    const archive = archiver('zip', { zlib: { level: 9 } });

    // Pipe archive → response
    archive.pipe(res);

    // Add files into zip
    archive.append(csv, { name: 'users.csv' });
    archive.append(excelBuffer, { name: 'users.xlsx' });

    // Finalize
    await archive.finalize();

  } catch (error) {
    console.error(error);
    res.status(500).send('ZIP export failed');
  }
};


//JSZIP
exports.exportJSZip = async (req, res) => {
  try {
    // 1. Get data from DB
    const users = await User.findAll({ raw: true });

    // 2. Convert to worksheet
    const worksheet = XLSX.utils.json_to_sheet(users);

    // 3. Create CSV & Excel
    const csv = XLSX.utils.sheet_to_csv(worksheet);

    const excelBuffer = XLSX.write(
      {
        SheetNames: ['Users'],
        Sheets: { Users: worksheet }
      },
      { type: 'buffer', bookType: 'xlsx' }
    );

    // 4. Create ZIP
    const zip = new JSZip();

    zip.file('users.csv', csv);
    zip.file('users.xlsx', excelBuffer);
    zip.file('readme.txt', csv);

    // 5. Generate ZIP buffer
    const zipBuffer = await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE'
    });

    // 6. Send response
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename=users.zip');

    res.send(zipBuffer);

  } catch (error) {
    console.error(error);
    res.status(500).send('ZIP export failed');
  }
};