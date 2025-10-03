const fs = require('fs')
// fs.writeFileSync('catatan.txt', ' Nama Saya Nurul ALdi') 
// fs.appendFileSync('catatan.txt', ' Saya tinggal di Padang')

// const catatan = require('./catatan.js')
// const pesan = catatan()
// console.log(pesan)

// const validator = require('validator')
// const ambilCatatan = require('./catatan.js')
// const pesan = ambilCatatan()
// console.log(pesan)
// console.log(validator.isURL('https://aldi.com'))



const chalk = require('chalk')
// console.log(chalk.blue('print warna biru sukses'))
// console.log(chalk.red('print warna cinta berhasil'))



// const ambilCatatan = require('./catatan.js')

// const command = process.argv[2]
// console.log(process.argv)
// if(command === 'tambah') {
//     console.log('Tambah Catatan')
// } else if (command === 'hapus') {
//     console.log('Hapus')
// }


const yargs = require('yargs')
const catatan = require('./catatan.js')
const { hideBin }= require('yargs/helpers')

// kustomisasi versi yargs dengan .usage dan .epilog
const argv = yargs(hideBin(process.argv))
.usage('Usage: $0 <command> [options]')
.epilog('Versi: 10.1.0')
.command({ // Membuat perintah (command) 'tambah'
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.tambahCatatan(argv.judul, argv.isi)
    }
})
.command({ // Perintah hapus
    command: 'hapus',
    describe: 'hapus catatan',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        catatan.hapusCatatan(argv.judul)
    }
})
.command({ // perintah membaca sebuah catatan
    command: 'baca',
    describe: 'baca sebuah catatan',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.bacaCatatan(argv.judul)
    }
})
.command({ // perintah menampilkan list catatan
    command: 'list',
    describe: 'Menampilkan daftar semua catatan',
    handler: function () {
        catatan.listCatatan()
    }
})
.argv

// letakkan bagian ini pada baris terakhir