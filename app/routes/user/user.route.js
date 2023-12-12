//This file will be used to manage the user routes
const router = require('express').Router();
//const { getUsers } = require('./user.controller');
const { getOneUser, updateUser, removeUser } = require('./user.controller');

router.route('/').get(getOneUser);
router.route('/:userId').get(getOneUser).put(updateUser).delete(removeUser);
//router.route('/userId?').get(getOneUser).put(updateUser).delete(removeUser);

module.exports = router;