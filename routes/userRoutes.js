let express = require('express');
let user = require('../controller/userController');
let router = express.Router();

router.get('/getdata', user.getUsers);
router.get('/findone', user.findUser);
router.post('/create', user.createUser);


module.exports = router;