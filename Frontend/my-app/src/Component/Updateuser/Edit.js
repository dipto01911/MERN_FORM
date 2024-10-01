// @flow strict

import * as React from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import'../addUser/Add.css';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
function Edit() {
    const navigate=useNavigate();
    const {id}=useParams();

   const users={
    fname:"",
    lname:"",
    email:""
   } 
 const[user,setuser]=useState(users);

    const changehandler=async(e)=>{
        const {name,value}= e.target;
        setuser({...user,[name]:value});
        console.log(user)
    }
    // useEffect(()=>{
    //     fetch(`http://localhost:4000/api/v1/user/find/${id}`)
    //     .then(res => res.json())
    //     .then(data => setuser(data))
    // })
const submitForm=async(e)=>{
 e.preventDefault();
 await axios.patch(`http://localhost:4000/api/v1/user/update/${id}`,user)
  .then((res)=>{
    toast.success(res.data.message,{position:'top-right'})
    navigate('/');
  })
}
    return (
        <div className='addUser'>
        <Link to={'/'}>Back</Link>
       <h3>Update New User</h3>
       <form className='adduserform' onSubmit={submitForm}>
        <div className='inputGroup'>
            <label htmlFor='fname'>First name</label>
            <input type='text' onChange={changehandler} id='fname' name='fname' placeholder='Enter your first name'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor='lname'>Last  name</label>
            <input type='text'onChange={changehandler} id='lname' name='lname'  placeholder='Enter your last name' />
        </div>
        <div className='inputGroup'>
            <label htmlFor='email'>Email</label>
            <input type='email'onChange={changehandler} id='email' name='email'  placeholder='Enter your email name'/>
        </div>
       
       <div className='inputGroup'>
        <button type='submit' id='submit'>Update User</button>

       </div>

       </form>
    </div>
    );
};

export default Edit;