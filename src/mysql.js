import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    "user" : "root",
    "password" : "senha",
    "database" : "ecommerce",
    "host" : "127.0.0.1",
    "port" : 3306
});

export default pool;