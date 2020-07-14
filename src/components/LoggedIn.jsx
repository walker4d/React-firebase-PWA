import React from 'react';


import {

  Link,
  Redirect
} from "react-router-dom";
import Fire from '../config/Fire';


const LoggedIn = () => {

   const Logout =()=>{

 Fire.auth.signOut();


 return <Redirect to="/" />

  }


 
  
  return (
    <div>
      <li className="nav-item">
        <Link className="nav-link" to="/posts/">Posts</Link>

      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={Logout}>Sign out</a>


      </li>
    </div>
  );



}

export default LoggedIn;
