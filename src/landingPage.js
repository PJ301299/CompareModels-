import React from 'react';
import auth from './auth.js';
import {UpdateUsername} from './Layout.js';

export const LandingPage = (props) =>{
  return(<div className="container-fluid" style={{backgroundColor:"white",}}>
  <h3 style={{backgroundColor:"black", color:"white", padding:"4% 40%"}}>User Login</h3>
  <br/>
  <br/>
    <div style={{padding:"2% 40%"}}>
      <p style={{float:"left"}}>Username : </p>
      <input
        type="text"
        placeholder="username"
        id="uname"
        >
      </input>
    </div>
    <div style={{padding:"2% 40%"}}>
      <p style={{float:"left"}}>Password : </p>
      <input type="password" placeholder="password" id="pass"></input>
    </div>
  <button
    onClick = {() => {
      if(document.getElementById("uname").value === "admin" && document.getElementById("pass").value === "12345" )
      {
        auth.login(()=>{
        props.history.push("/app");
        });
      }
      else
      {
        alert("INVALID USERNAME OR PASSWORD");
      }
  }}>
  Login
  </button>
  </div>)
};
