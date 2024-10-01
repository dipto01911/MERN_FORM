

const router=require('express').Router();
const useRoutes=require('./userroute');
router.use('/api/v1/user',useRoutes);
module.exports=router;
