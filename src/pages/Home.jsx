import React from 'react'
import { LoginContext } from '../LoginContext'
import { useContext } from 'react'
import { useState } from 'react'
import '../Home.css'
const Home = () => {
  const [fn, sfn] = useState("");
  const [ln, sln] = useState("");
  const [eml, seml] = useState("");
  const [pass, spass] = useState("");
  const [allcombined, updateit] = useState({fname: "", lname: "", email: "", password: ""})
  const [tempstore, updatetempstore] = useState([])

  
  const { storeLogin, updateLogin } = useContext(LoginContext);
  // function tempstoredata(event) {
  //   settempstore(event.target.value)
  // }
  // // function storedata(e) {
  // //   setinputdata(tempstore);
  // //   console.log("This is data from the context: " + inputdata)
  // // }
  function handler(event) {

    const { name, value } = event.target;
    updateit({
      ...allcombined,
      [name]: value,
      id: Date.now()
    })
  }

  function loginbtn() {
    console.log(allcombined);
    if (allcombined.fname === '' || allcombined.lname === '' || allcombined.email === '' || allcombined.password === '') {
      alert('Please fill all the fields');
      return;
    } else {
      actuallogin();
    }
    updatetempstore([...storeLogin, allcombined]);
    tempstore.map(function(a,b,c){
      if (a.fname === '' || a.lname === '' || a.email === '' || a.password === '') {
        alert('Please fill all the fields');
        return;
      } else {
        updatetempstore([]);
        actuallogin();
      }
    })
  }

  function actuallogin() {
    updateLogin([...storeLogin, allcombined]);
    updateit({fname: "", lname: "", email: "", password: ""});
  }

  function laughatbro() {
    let myprompt = prompt('Say wallahi bro say wallahi ✌️💔');
    console.log(myprompt);
  }
  return (
    <div className='parent'>
      <div className='boxcontent'>
        <div className='topbar'>
          <h1>Login</h1>
        </div>
        <div className='logincontent'>
          <input className='styled fname' placeholder='First Name' onChange={handler} name='fname' value={allcombined.fname} required></input>
          <input className='styled lname' placeholder='Last Name' onChange={handler} name='lname' value={allcombined.lname}></input>
          <input className='styled email' placeholder='Email' onChange={handler} name='email' value={allcombined.email}></input>
          <input className='styled pass' placeholder='Password' type='password' onChange={handler} name='password' value={allcombined.password}></input>
          <div className='bottomlogcon'>
            <div>
              <input type="checkbox" id="remember" name="rememberme" value="RememberMe"></input>
              <label for="rememberme"> Remember Me</label>
            </div>
            <a onClick={laughatbro}>Forgot Password?</a>
          </div>
          <button className='loginbtn' onClick={loginbtn}>Login</button>
          <p>Don't have an account? <a className='registerlink'><strong>Register</strong></a></p>
        </div>
      </div>
    </div>
  )
}

export default Home
