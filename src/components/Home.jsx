import React, { Component } from 'react';
import Blogs from './Blogs';
export default class Home extends Component {
    render() {
        return (
            <div>
            <div className="container-fluid">
       




<br/>
        
       <div className="jumbotron  jumbotron-fluid text-center">

  
<h4 className="card-title h4 pb-2"><strong>Boku: #1 Anime Blogging site</strong></h4>

<div className="view overlay my-4">
  <img src="https://i1.wp.com/recommendmeanime.com/wp-content/uploads/2016/06/anime-competition.jpg?fit=1024%2C717&ssl=1&resize=1280%2C720" className="img-fluid" alt="image"/>
  <a href="#">
    <div className="mask rgba-white-slight"></div>
  </a>
  </div>
  </div>

</div>
<div className="container">
<Blogs/>


</div>

</div>

        )
    }
}
