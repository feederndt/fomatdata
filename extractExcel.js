const XLSX = require('xlsx');

// Load the Excel file
const workbook = XLSX.readFile('MantleSurge.xlsx'); // Replace with your file name
const sheetName = workbook.SheetNames[0]; // Get the first sheet
const worksheet = workbook.Sheets[sheetName];

// Convert sheet to JSON format
const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

const B = jsonData.map(row => row[0]).filter(cell => cell !== undefined);

const C = jsonData.map(row => row[1]).filter(cell => cell !== undefined);


for (let i = 0; i < 10; i++) {
    console.log(i)
    const addresses = []
    const privates = []

    for (let j = 0; j < 200; j++) {
        addresses.push(B[j * 10 + i])
        privates.push(C[j * 10 + i])
    }

    const worksheetData = addresses.map((_, i) => [addresses[i], privates[i]]);

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    XLSX.writeFile(workbook, `${i + 1}.xlsx`);
}

// console.log("B", B, "C", C);
