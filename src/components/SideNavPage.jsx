import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Singup from './Signup';
import BlogOverview from './BlogOverview';
import Posts from '../crud/Posts';  
import {AuthProvider } from '../config/Auth';
import PrivateRoute from '../config/PrivateRoute';
import Edit from '../crud/UpdatePost';
import Create from '../crud/CreatePost';
import View from '../crud/PostOverview';

import CurrentUserLogin from './currentUserLogin';

const Navbar =()=> {
 


    return (
        
      <AuthProvider>
      <div>
          <Router>
  

          <nav class="navbar navbar-expand-lg navbar-dark primary-color">

<a class="navbar-brand" href="#">Boku</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
  aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="basicExampleNav">

  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <Link className="nav-link" to="/">Home  <span className="sr-only">(current)</span></Link>
      
      </li>
  
    <CurrentUserLogin/>
    
     
        
    </ul>
  </div>
</nav>
   
        <Switch>
          <Route path="/signup">
            <Singup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/BlogOverview/:id" exact component={BlogOverview}/>
          <PrivateRoute  path="/Posts/" exact component={Posts}/>
          <PrivateRoute  path="/Create/" exact component={Create}/>
          <PrivateRoute  path="/edit/:id" exact component={Edit}/>
          <PrivateRoute  path="/post/:id" exact component={View}/>


          <Route render={function(){
                        return (<div>404</div>); 
                    }}/>
        </Switch>
       
    </Router>  
      </div>
      </AuthProvider>
    );
  }

export default Navbar;