const { MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'testsaja';
async function main() {
    try {
        await client.connect();
        console.log('Berhasil terhubung ke MongoDB database server');
        const db = client.db (namaDatabase);
        // db.collection('pengguna').deleteMany({ usia: 26
        // }).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.error(error);
        // }).finally(() => {
        //     client.close();
        // });

        // Challange
        db.collection('tugas').deleteOne({
            Deskripsi: "Membersihkan rumah"
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            client.close();
        });
    } catch (error) {
        console.error(error);
    }
}
main();