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

const insertUser = (user, callback) => {
    const { id, name, phone, email } = user;

    // Check if the id already exists in the database
    pool.query('SELECT id FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }

        if (results.length > 0) {
            // If the id is found in the database, return an error
            //return callback(new Error('User ID already exists'), null);
            console.log('User ID already exists');
            return callback(new Error('User ID already exists'), null);
        }

        // If the id is not found, proceed to insert the new user
        pool.query('INSERT INTO users (id, name, phone, email) VALUES (?, ?, ?, ?)', [id, name, phone, email], (err, results) => {
            if (err) {
                return callback(err, null);
            }

            return callback(null, results);
        });
    });
};

const removeUser = (userID, callback) => {
    pool.query('DELETE FROM users WHERE id = ?', [userID], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (results.affectedRows === 0) {
            return callback(new Error('User not found'), null);
        }
        return callback(null, results);
    });
};

const updatetUser = (user, callback) => {
    const { id, name, phone, email } = user;

    if (!name || !phone || !email) {
        return callback(new Error('Please provide all required fields'), null);
    }
    // Check if the id already exists in the database
    pool.query('UPDATE users SET name = ?, phone = ?, email = ? WHERE id = ?',
        [name, phone, email, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }

            if (results.affectedRows === 0) {
                // No rows were affected, meaning the user with the given id was not found
                console.log('User Not Found');
                return callback(new Error('User Not Found'), null);
            }

            // User successfully updated
            return callback(null, results);

        });
};

module.exports = { getAllUsers, getSingleUser, insertUser, removeUser, updatetUser };
//module.exports = users;
