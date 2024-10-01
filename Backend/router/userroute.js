
const router=require('express').Router();
const {deleteUser,createuser,findall,findone ,UpdateUser} = require('../controller/user');



router.get('/find/:Id',findone)
router.patch('/update/:Id',UpdateUser);
router.delete('/delete/:Id',deleteUser);
router.get('/find',findall);
router.post('/create',createuser);

module.exports=router;