const fs = require('fs')

// const buku = {
//     judul: 'Pemograman Jaringan',
//     penulis: 'Nurul Aldi'
// }

// const bookJson = JSON.stringify(buku)
// fs.writeFileSync('1-jsontest.json', bookJson)

const dataBuffer = fs.readFileSync('1-jsontest.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.judul)