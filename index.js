const fs = require('fs');
const XLSX = require('xlsx');

const datas = fs.readFileSync('100x.txt', 'utf8');

const strAccounts = datas.split(/\r?\n|\r|\n/g).map(e => e.split(":"))

console.log(strAccounts.length)

const username = []
const password = []
const mail = []
const passmail = []
const token = []
const twoFA = []

strAccounts.forEach((e) => {
    username.push(e[0])
    password.push(e[1])
    mail.push(e[2])
    passmail.push(e[3])
    token.push(e[4])
    twoFA.push(e[5])
})


const data = [
    username,
    password,
    mail,
    passmail,
    token,
    twoFA
];

// Transpose the arrays so that they are columns in the Excel sheet
const worksheetData = username.map((_, i) => [username[i], password[i], mail[i], passmail[i], token[i], twoFA[i]]);

// Create a worksheet and workbook
const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Write the workbook to an Excel file
XLSX.writeFile(workbook, '200.xlsx');

console.log('Excel file has been created successfully.');

