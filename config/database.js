const mysql = require('mysql2');
// buat konfigurasi koneksi
const koneksi = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'dedeari123',
    database: 'latihan_api',
    multipleStatements: true
});
// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = koneksi;