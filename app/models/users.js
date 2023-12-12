// const users = [
//     {
//         id: 1,
//         name: 'John Doe',
//         phone: '2000005',
//         email: 'john.doe@example.com',
//     },
//     {
//         id: 2,
//         name: 'Jane Smith',
//         phone: '3000002',
//         email: 'jane.smith@example.com',
//     },
//     {
//         id: 3,
//         name: 'Max Johnson',
//         phone: '4000001',
//         email: 'max.johnson@example.com',
//     },
// ];


// Export the database object
const mysql = require('mysql');
const pool = mysql.createPool({
    // host: "localhost",
    // user: "root",
    // //   port: 3306,
    // password: "password",
    // database: "collection_app",
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0,
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    port: 3306,
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "collection_app",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const getAllUsers = (callback) => {
    pool.query('select * from users', (err, results) => {
        if (err) {
            return callback(err, null);
        }

        return callback(null, results);
    });
};

const getSingleUser = (userID, callback) => {
    pool.query('select * from users where id = ?', [userID], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
};

module.exports = { getAllUsers, getSingleUser };
//module.exports = users;
