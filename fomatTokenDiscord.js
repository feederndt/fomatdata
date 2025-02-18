const fs = require('fs');
const XLSX = require('xlsx');

const datas = fs.readFileSync('180x2.txt', 'utf8');

const strDatas = datas.split(/\r?\n|\r|\n/g).map(e => e.split("|"))

const token = []

strDatas.forEach((e) => {
    token.push(e[0].trim())
})

// Transpose the arrays so that they are columns in the Excel sheet
const worksheetData = token.map((_, i) => [token[i]]);

// Create a worksheet and workbook
const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Write the workbook to an Excel file
XLSX.writeFile(workbook, '180x2.xlsx');

console.log('Excel file has been created successfully.');
