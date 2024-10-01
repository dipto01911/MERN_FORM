
const User=require('../models/User');
const {findUserByProperty,findUser}=require('../services/service');

const createuser=async(req,res,next)=>{
    const {fname,lname,email,password}=req.body;
    try{
const users=new User({
    fname:fname,
    lname:lname,
    email:email,
    password:password
})
await users.save();
res.status(201).json({message:'user Created Successfully',users});
    }catch(e){
     next(e);
    }
}

const findall=async(req,res,next)=>{
    try{
 const users=await findUser();
 if(!users){
    return res.status(400).json({message:'Not found'})
 }
 res.status(200).json(users);
    }catch(e){
        next(e);
    }
}

const findone=async(req,res,next)=>{
  try{
 const userId=req.params.Id;
 const users=await findUserByProperty('_id',userId)
if(!users){
    return res.status(404).json({message:'User not found'});
}
return res.status(200).json(users);
  }catch(e){
    next(e)
  }
}

const UpdateUser=async(req,res,next)=>{
    const userId=req.params.Id;
try{
const{fname,lname,email}=req.body;
const users=await findUserByProperty('_id',userId);
if(!users){
    return res.status(404),json({message:'User Not Found'})

}
users.fname= fname===undefined?users.fname:fname;
users.lname=lname===undefined?users.lname:lname;
users.email =email===undefined ? users.email:email;

await users.save();
return res.status(200).json({message:'Update Sucessfully',users})
}catch(e){
    next(e);
}

}

const deleteUser=async(req,res,next)=>{
    const userId=req.params.Id;
 try{
 const users=await User.findById(userId);
  if(!users){
    return res.status(404).json({message:'Users Not Found'})
  }
 
  await User.findByIdAndDelete(userId);
  return res.status.json(200).json({message:'Deleted Successfully',users});

 }catch(e){
    next(e);
 }
}

module.exports={deleteUser,createuser,findall,findone,UpdateUser}