const fs = require('fs');
const XLSX = require('xlsx');

const datas = fs.readFileSync('500xko2fa.txt', 'utf8');

const strAccounts = datas.split(/\r?\n|\r|\n/g).map(e => e.split("|"))

// console.log(strAccounts)


const username = []
const password = []
const twoFA = []
const mail = []
const passMail = []

strAccounts.forEach((e) => {
    username.push(e[0])
    password.push(e[1])
    twoFA.push(e[2])
    mail.push(e[3])
    passMail.push(e[4])
})


const data = [
    username,
    password,
    twoFA,
    mail,
    passMail
];

// Transpose the arrays so that they are columns in the Excel sheet
const worksheetData = username.map((_, i) => [username[i], password[i], twoFA[i], mail[i], passMail[i]]);

// Create a worksheet and workbook
const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Write the workbook to an Excel file
XLSX.writeFile(workbook, '500xko2fa.xlsx');

console.log('Excel file has been created successfully.');
