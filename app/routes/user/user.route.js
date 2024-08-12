//This file will be used to manage the user routes
const router = require('express').Router();
const { getOneUser, createUser, removeUser, updateUser } = require('./user.controller');

router.route('/').get(getOneUser);
router.post('/', createUser);
router.put('/', updateUser);
router.route('/:userId').get(getOneUser).delete(removeUser);

module.exports = router;