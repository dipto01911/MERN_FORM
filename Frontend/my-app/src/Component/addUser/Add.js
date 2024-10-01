// @flow strict

import * as React from 'react';
import './Add.css';
import { Link,useNavigate } from 'react-router-dom';
import{toast} from'react-hot-toast';
import axios from "axios";
import { useState } from 'react';
function Add() {
    const users={
        fname:"",
        lname:"",
        email:"",
        password:""
    }
const[user,setuser]=useState(users);
const navigate=useNavigate();

    const inputHandler=(e)=>{
        const{name,value}=e.target;
         setuser({...user,[name]:value})
         console.log(user)
    }
const submitform=async(e)=>{
e.preventDefault();
await axios.post("http://localhost:4000/api/v1/user/create",user)
.then((res)=>{
    
    toast.success(res.data.message, {position:'top-right'})
    navigate('/');

}).catch(err => console.log(err));
}

    return (
        <div className='addUser'>
            <Link to={'/'}>Back</Link>
           <h3>Add New User</h3>
           <form className='adduserform'onSubmit={submitform}>
            <div className='inputGroup'>
                <label htmlFor='fname'>First name</label>
                <input type='text' onChange={inputHandler} id='fname' name='fname'  placeholder='Enter your first name' required/>
            </div>
            <div className='inputGroup'>
                <label htmlFor='lname'>Last  name</label>
                <input type='text' onChange={inputHandler} id='lname' name='lname'  placeholder='Enter your last name' required/>
            </div>
            <div className='inputGroup'>
                <label htmlFor='email'>Email</label>
                <input type='email' onChange={inputHandler} id='email' name='email'  placeholder='Enter your email name' required/>
            </div>
            <div className='inputGroup'>
                <label htmlFor='password'>Password</label>
                <input type='password' onChange={inputHandler} id='password' name='password'  placeholder='Enter your password' required/>
            </div>
           <div className='inputGroup'>
            <button type='submit' id='submit'>Add User</button>

           </div>

           </form>
        </div>
    );
};

export default Add;
