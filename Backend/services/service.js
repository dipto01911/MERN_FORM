
const User=require('../models/User')
const findUserByProperty=(key,value)=>{
    if(key==='_id'){
        return User.findById(value);
    }
    return User.findOne({[key]:value})
}

const findUser=()=>{
    return User.find();
}

module.exports={findUser,findUserByProperty};