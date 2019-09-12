const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'saboroso',
    password: 'senha_da_nasa'
})

module.exports = connection