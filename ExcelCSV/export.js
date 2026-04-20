const XLSX = require('xlsx');
const { User } = require('./models');

app.get('/export', async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });

    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

    const buffer = XLSX.write(workbook, {
      type: 'buffer',
      bookType: 'xlsx'
    });

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=users.xlsx'
    );

    res.send(buffer);
  } catch (err) {
    res.status(500).send('Export failed');
  }
});