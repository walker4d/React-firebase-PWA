import React, { useContext, useEffect } from 'react';

import { AuthContext} from "../config/Auth";

import NotloggedIn from './NotLoggedIn'; 

import LoggedIn from './LoggedIn';

 const CurrentUserLogin = () => {

  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    // Update the document title using the browser API
  if(currentUser!=null){

    console.log('loggin ');
   
    
  }else{

    console.log('not login ');


    
  }

  });

return(  <div>  {currentUser != null ?  <LoggedIn/> : <NotloggedIn/>   } </div> );



}

export default CurrentUserLogin;
