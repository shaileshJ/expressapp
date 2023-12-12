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

const getUsers = (req, res) => {
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
}

const updateUser = (req, res) => {
    // if (!req.params.userId) {
    //     res.status(400).json({ message: 'user id is required' });
    // }
    // const result = users.find((user) => user.id === parseInt(req.params.userId));
    // if (!result) {
    //     res.status(404).json({ message: 'invalid user id' });
    // } else {
    res.status(200).json({ message: `user with id ${req.params.userId} was updated` });
    //}
};

const removeUser = (req, res) => {
    // if (!req.params.userId) {
    //     res.status(400).json({ message: 'user id is required' });
    // }
    // const result = users.find((user) => user.id === parseInt(req.params.userId));
    // if (!result) {
    //     res.status(404).json({ message: 'invalid user id' });
    // } else {
    res.status(200).json({ message: `user with id ${req.params.userId} was deleted` });
    //}
};

module.exports = {
    getUsers,
    getOneUser,
    updateUser,
    removeUser
};
