
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');
const connectDB=require('./db');
const User=require('./models/User');
const Routes=require('./router/index');
const app=express();
app.use(bodyParser.json())
app.use(cors());
app.use(Routes);

app.get('/',(req,res,next)=>{
  res.json('it is get method');
})
app.use((err,req,res,next)=>{
    res.status(500).json({message:'Server Error'})
})


connectDB('mongodb://localhost:27017/Data')
.then(()=>{
    console.log('Database connect ..')
    app.listen(4000,console.log('Listening'));
}).catch((err)=>{
    console.log(err);
})



