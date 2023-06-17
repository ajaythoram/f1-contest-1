import React, { useState } from "react";



const Signup = (()=>{
  let[name,setName] = useState('');
  let[mail,setMail] = useState('');
  let[password,setPassword] = useState('');
  let[cnfpass,setCnfpass] = useState('');
  const [alertMessage, setAlertMessage] = useState('');


const setname = (e)=>{
    setName(e.target.value);
}
const setmail = (e)=>{
    setMail(e.target.value);
}
const setpass = (e)=>{
    setPassword(e.target.value);
}
const setcnfpass = (e)=>{
    setCnfpass(e.target.value);
}

function onsubmit(){
    if(name === ''|| mail === '' || password === '' || cnfpass === ''){
        setAlertMessage("Please fill in all fields");
    }
  else  if(password !== cnfpass) {
    setAlertMessage("Password not match");
    }
    else{
        setAlertMessage("Successfully Signed Up!");
    }
}
    return (
        <form id="form" onSubmit={onsubmit}>
            <div id="Signup_Conatinr">
       <h1>Signup</h1>
      <input  type="text"  placeholder="Full Name"   onChange={setname} />
      <input placeholder="Email" type="email" required onChange={setmail}  />
      <input  placeholder="Password" type="password"   onChange={setpass} />
      <input type="password" placeholder="Confirm Password" onChange={setcnfpass} />
      <button id="btn">Signup</button>

       {alertMessage && <p id="para">{alertMessage}</p>}
        </div>
        </form>
    )
   
})



export default Signup;