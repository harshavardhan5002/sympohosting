import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import XLSX from 'xlsx';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { name, email, college, department, year } = req.body;

  const filePath = './registrations.xlsx';
  let workbook;
  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
  } else {
    workbook = XLSX.utils.book_new();
  }

  const worksheet = workbook.Sheets['Registrations'] || XLSX.utils.aoa_to_sheet([['Name', 'Email', 'College', 'Department', 'Year']]);
  XLSX.utils.sheet_add_aoa(worksheet, [[name, email, college, department, year]], { origin: -1 });
  workbook.Sheets['Registrations'] = worksheet;

  XLSX.writeFile(workbook, filePath);

  res.send('Registration successful');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});