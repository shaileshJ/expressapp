//This file will be used to manage the logic
const users = require('../../models/users');

// const getUsers = (req, res) => {
//     if (!req.query.sort) {
//         res.status(200).json({ users });
//         return;
//     }
//     if (req.query.sort === 'asc') {
//         const sortedUsers = [...users].sort((a, b) =>
//             a.name > b.name ? 1 : a.name < b.name ? -1 : 0
//         );
//         res.status(200).json({ sortedUsers });

//     } else if (req.query.sort === 'dsc') {
//         const sortedUsers = [...users].sort((a, b) =>
//             a.name < b.name ? 1 : a.name > b.name ? -1 : 0
//         );
//         res.status(200).json({ sortedUsers });
//     } else {
//         res.status(400).json({ message: 'invalid sort parameters' });
//     }
// };
const createUser = async (req, res) => {
    console.log('inside the crete user function');
    try {
        const { id, name, phone, email } = req.body;
        console.log(req.body);
        users.insertUser(req.body, (err, results) => {
            if (err) {
                console.error('Error inserting user:', err);
                res.status(500).send('Server error');
                return;
            }
            res.status(201).send('User created successfully');
        });

    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
const getUsers = (req, res) => {
    console.log('inside getusers');
    users.getAllUsers((err, users) => {
        if (err) {
            console.error('Error fetching users data:', err);
            return res.status(500).json({ error: 'Internal server erro' });
        }

        if (!req.query.sort) {
            return res.status(200).json(users);
        }
        if (req.query.sort === 'asc') {
            const sortedUsers = [...users].sort((a, b) =>
                a.name > b.name ? 1 : a.name < b.name ? -1 : 0
            );
            res.status(200).json({ sortedUsers });
        } else if (req.query.sort === 'dsc') {
            const sortedUsers = [...users].sort((a, b) =>
                a.name < b.name ? 1 : a.name > b.name ? -1 : 0
            );
            res.status(200).json({ sortedUsers });
        } else {
            res.status(400).json({ message: 'invalid sort parameters' });
        }

    });
};

const getOneUser = (req, res) => {
    //console.log(req.params.userId);
    const userID = req.params.userId;
    if (!req.params.userId) {
        res.status(400).json({ message: 'user id is required' });
        return;
    }
    users.getSingleUser(userID, (err, user) => {
        // console.log(user);
        if (err) {
            console.error('Error fetching users data:', err);
            return res.status(500).json({ error: 'Internal server erro' });
        } else {
            if (user == '') {
                return res.status(404).json({ message: 'invalid user id' });

            } else { return res.status(200).json(user); }
        }

    });
    //const result = users.find((user) => user.id === parseInt(req.params.userId));
    // if (!result) {
    //     res.status(404).json({ message: 'invalid user id' });
    // } else {
    //     res.status(200).json({ user: result });
    // }
};


const dupdateUser = (req, res) => {
    // if (!req.params.userId) {
    //     res.status(400).json({ message: 'user id is required' });
    // }
    // const result = users.find((user) => user.id === parseInt(req.params.userId));
    // if (!result) {
    //     res.status(404).json({ message: 'invalid user id' });
    // } else {
    //     res.status(200).json({ message: `user with id ${req.params.userId} was updated` });
    // }
};

const updateUser = async (req, res) => {
    console.log('inside the update user function');
    try {
        const { id, name, phone, email } = req.body;
        console.log(req.body);
        users.updatetUser(req.body, (err, results) => {
            if (err) {
                console.error('Error updating user:', err);
                res.status(500).send('Server error');
                return;
            }
            res.status(201).send('User updated successfully');
        });

    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const removeUser = (req, res) => {
    const userID = req.params.userId;
    if (!req.params.userId) {
        res.status(400).json({ message: 'user id is required' });
        return;
    }

    users.removeUser(userID, (err, user) => {
        // console.log(user);
        if (err) {
            console.error('Error fetching users data:', err);
            return res.status(500).json({ error: 'Internal server erro' });
        } else {
            if (user == '') {
                return res.status(404).json({ message: 'invalid user id' });

            } else {
                return res.status(200).json({ message: `user with id ` + userID + ` was deleted` });

            }
        }

    });
};

module.exports = {
    createUser,
    getUsers,
    getOneUser,
    updateUser,
    removeUser
};
