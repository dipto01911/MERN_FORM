
// @flow strict

import * as React from 'react';
import './User.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
function User() {

    const[user,setuser]=useState([]);

useEffect(()=>{
    fetch('http://localhost:4000/api/v1/user/find')
    .then(res => res.json())
    .then(data => setuser(data))
},[])

const deleteUser=async(id)=>{
  await axios.delete(`http://localhost:4000/api/v1/user/delete/${id}`)
  .then((res)=>{
   setuser((pre)=> pre.filter((user) => user._id !== id))
   toast.success(res.data.message,{position:'top-right'})

   console.log(res);
  }).catch((err)=>{
    console.log(err);
  })
}

    return (
        <div className='usertable'>
            <Link to={'/add'} className='addButton'>Add User</Link>
            <table border={3} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User name</th>
                        <th>User mails</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   

                     {
                       
                        user.map((pd,index) => <tr key={pd._id}>
                    <td>{index+1}</td>
                    <td>{pd.fname} {pd.lname}</td>
                    <td>{pd.email}</td>
                    <td className='actionButton'>
                    <button onClick={()=>deleteUser(pd._id)}><i className="fa-solid fa-trash-can"></i></button>    
                    <Link to={`/edit/`+pd._id} className='editButton'><i className="fa-regular fa-pen-to-square"></i></Link>  
                    </td>
                     </tr>)
                     } 

                    {/* <td>1</td>
                    <td>Dipto Ghosh</td>
                    <td>dipto@gmail.com</td>
                    <td className='actionButton'>
                    <button><i className="fa-solid fa-trash-can"></i></button>    
                    <Link to={'/edit'} className='editButton'><i className="fa-regular fa-pen-to-square"></i></Link>  
                    </td> */}
                    

                </tbody>
            </table>
        </div>
    );
};

export default User;