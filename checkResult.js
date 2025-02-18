const fs = require('fs');

const myAddresses = fs.readFileSync('myAddresses.txt', 'utf8');
const winerLists = fs.readFileSync('winerLists.txt', 'utf8');

const addressStr = myAddresses.split(/\r?\n|\r|\n/g).map(e => e.trim().toLocaleLowerCase()).filter(e => e.length > 0)
const winerListsArr = winerLists.split(/\r?\n|\r|\n/g).map(e => e.trim().toLocaleLowerCase()).filter(e => e.length > 0)

// const tempArr = addressStr.map(e => e.trim().toLocaleLowerCase())

// console.log(tempArr, "aaaaaaaaaaaa")

// // console.log(winerListsArr, "bbbbbbbbbbbbb")


addressStr.forEach((e, i) => {
    if (winerListsArr.includes(e)) {
        console.log(i + 1)
    }
})

// console.log(bus)