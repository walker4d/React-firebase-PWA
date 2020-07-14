import React from 'react';

import {
  
    Link
  } from "react-router-dom";
const NotLoggedIn = () => {
    
  
  
  
  
  


 

     return (
        <div>
      <li className="nav-item">
          <Link className="nav-link" to="/signup">singup</Link>
       
          </li>
  
          <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
    
          </li>
       </div>
    );


}

export default NotLoggedIn
