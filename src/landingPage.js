import React from 'react';
import auth from './auth.js';
import Layout from './Layout.js'

export const LandingPage = (props) =>{
  return(<div className="container-fluid" style={{backgroundColor:"#f1f1f1"}}>
  <h3 style={{backgroundColor:"black", color:"white"}}>User Login</h3>
  <br/>
  <br/>
    <div style={{padding:"2% 40%"}}>
      <p style={{float:"left"}}>Username : </p>
      <input type="text" placeholder="username" id="uname"></input>
    </div>
    <div style={{padding:"2% 40%"}}>
      <p style={{float:"left"}}>Password : </p>
      <input type="password" placeholder="password"></input>
    </div>
  <hr/>
  <button
    onClick = {() => {
      auth.login(()=>{
        props.history.push("/app");
      });
  }}>
  Login
  </button>
  </div>)
};
