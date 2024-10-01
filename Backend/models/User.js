

const{Schema,model}=require('mongoose');

const userschema=new Schema({
    fname:{
        type:String,
        required:true,
        minlength:4

    },
    lname:{
   type:String,
   required:true,
   minlength:3
    },
    email:{
type:String,
required:true,
validate:{
    validator:function(e){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e);
},
message:'Email validation failed',
//message: props => `${props.value} is not a valid email address!`
}
    },
    password:{
        type:String,
        required:true,
        minlength:[4,'password is too short'],
    }
})

const User=new model('User',userschema);
module.exports=User;