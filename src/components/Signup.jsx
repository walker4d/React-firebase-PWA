import React, { useCallback, useState } from 'react';
import {withRouter} from "react-router";
import fire from '../config/Fire';
 const  Signup =({  history  })=>{
   
    const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [username, setUsername] = useState('');

const handleSignUp = useCallback(
   async event => {

event.preventDefault();



try{
    const {email, password,username,firstname,lastname} = event.target.elements;

    await fire.register(username.value,email.value,password.value)
await fire.addDetail(username.value,firstname.value,lastname.value,email.value);
history.push("/Posts");
}catch(error){
    alert(error)
}

   }

,[history]);


        return (
            <div>

<form class="text-center border border-light p-5" onSubmit={handleSignUp}>

    <p class="h4 mb-4">Sign up</p>

    <input type="text" id="defaultRegisterFormFirstName" class="form-control" name= "firstname"placeholder="First name" value={firstname} onChange={e => setFirstname(e.target.value)}/>
      <br/>
    <input type="text" id="defaultRegisterFormLastName" class="form-control" name= "lastname" placeholder="Last name" value={lastname} onChange={e => setLastname(e.target.value)}/>
     <br/>
     <input type="text" id="defaultRegisterFormUserName" class="form-control" name= "username" placeholder="User name" value={username} onChange={e => setUsername(e.target.value)}/>
     <br/>
    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" name= "email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>

    <input type="password" id="defaultRegisterFormPassword" class="form-control" name= "password" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" value={password}  onChange={e => setPassword(e.target.value)}/>
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>

 <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>

</form>









































            </div>
        )
    
}

export default withRouter(Signup);