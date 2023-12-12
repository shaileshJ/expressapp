const router = require('express').Router();
const userRoute = require('./user/user.route');
const usersRoute = require('./user/users.route');

router.use('/user', userRoute);
router.use('/users', usersRoute);

module.exports = router;