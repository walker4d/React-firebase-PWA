
  import React, { useEffect,useState } from 'react';
import {
    
    Link,
    Redirect,
    NavLink
  } from "react-router-dom";
import fire from '../config/Fire';

const Blogs = () => {

const [data,setData] = useState([]);
const [list,setList] = useState();

 let Post = {
        username:null,
        title:null,
        subtitle:null,
        ImageUrl:null,
        Message:null
      
      }

let Posts = [];

const users = () => {


 
if(list != null || typeof list !== "undefined"  ){
      list.map((post, index) => {
   //       console.log('post',post);
if(typeof post.Posts !== "undefined" ){
          post.Posts.map((p,i)=>{
        
            
            Post.username = post.username;
            Post.title = p.title;
            Post.subtitle = p.subtitle;
            Post.ImageUrl = p.ImageUrl;
            Post.Message = p.Message;


Post = {
        username:null,
        title:null,
        subtitle:null,
        ImageUrl:null,
        Message:null
      
      }
            Posts.push(Post);


          })
}else{
  console.log('undefined', list);
  
}
        });
     


          

      



}


console.log('data',Posts);
setData(Posts);

}
 
useEffect(()=>{

 fire.users.get().then(querySnapshot => {
   setList( querySnapshot.docs.map(doc => doc.data()));
   //  console.log(list);
users();

 });



 });
 
if(data !== null)
{


    return (
  
             <div className="row">
   
   
    
    


         {data.map((post, index) => {
      return (

  <div className="col-sm-4">
<div className="card">

  <div className="view overlay">
    <img className="card-img-top" src={post.ImageUrl}
      alt="Card image cap"/>
      <Link  to={{ pathname: '/BlogOverview/'+index, state:  {post: post} }}>
 <div className="mask rgba-white-slight"></div>
  </Link>
  </div>

  <div className="card-body">

    <h4 className="card-title">{post.username}</h4>
    <p className="card-text">{post.subtitle}</p>


  

<Link  className="btn btn-primary" to={{ pathname: '/BlogOverview/'+index, state:  {post:post} }}>Read</Link>

  </div>

</div>
  </div>

      )})}


    </div>
      
    );
}else{
return <div>Loading....</div>

}
}

export default Blogs;
