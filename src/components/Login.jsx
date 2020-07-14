import React, { useCallback,useContext } from 'react';
import {withRouter,Redirect} from "react-router";
import fire from '../config/Fire';
import {Authentication, AuthContext} from "../config/Auth";

 const Login = ({history}) => {
    
const handleLogin = useCallback(
async event => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    try{
        await fire.login(email.value,password.value);
        history.push("/posts");
    }catch(error){
        console.log(error);
    }
}
,[history]
)

const {currentUser} = useContext(AuthContext);
if(currentUser){
    return <Redirect to="/Posts" />
}

        return (
            <div>
<form class="text-center border border-light p-5" onSubmit={handleLogin}>

    <p class="h4 mb-4">Log in</p>

    <input type="email" name="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail"/>

    <input type="password" name ="password"id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password"/>



    <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

</form>

            </div>
        )
    }

export default withRouter(Login);