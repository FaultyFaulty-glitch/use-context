import React from 'react'
import { LoginContext } from '../LoginContext'
import { useContext, useState, useEffect } from 'react'
import '../About.css'

const About = () => {
  const { storeLogin, updateLogin } = useContext(LoginContext);
  const [show, setshow] = useState(false);
  console.log(storeLogin);
  useEffect(function() {
    if (storeLogin.length === 0) {
      setshow(!show);
    } 
  },[storeLogin])
  return (
    <div className='body'>
      <h1>THE INFORMATION ABOUT THY USERING.</h1>
      {show&&<p>There is no data to show</p>}
      <div className='infostore'>
          {storeLogin.map(function(a,b,c){
            return <div className='infobox'>
              <p>{a.fname} {a.lname}</p>
              <div className='border'></div>
              <p>First Name: {a.fname}</p>
              <p>Last Name: {a.lname}</p>
              <p>Email: {a.email}</p>
              <p>Password: {a.password}</p>
              <p>ID: {a.id}</p>
              <i class="fa-solid fa-pen-to-square"></i>
              <i class="fa-solid fa-trash"></i>
            </div>
        })}
      </div>
    </div>
  )
}

export default About

// {storeLogin.map(function(a,b,c){
//           return <div>
//             <p>First Name: {a.fname}</p>
//             <p>Last Name: {a.lname}</p>
//             <p>Email: {a.email}</p>
//             <p>Password: {a.password}</p>
//           </div>
//         })}