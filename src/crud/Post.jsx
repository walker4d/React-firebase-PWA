import React from 'react';
import {
  
    Link,
    Redirect
  } from "react-router-dom";
import fire from '../config/Fire';

  
const Post= (props) => {

 
  
  let postOverview;
  const id = props.post.id;
 console.log('id from the post page.',id);
   
postOverview = props.post.posts;
// console.log('over', postOverview);  



if(typeof postOverview !== "undefined")
{

    return (
    

      <div className="row" >
         {postOverview.Posts.map((post, index) => {
      return (
<div className="col-sm-4">
<div class="card card-cascade narrower">
  <div class="view view-cascade overlay">
    <img class="card-img-top" src={post.ImageUrl}
      alt="Card image cap"/>
      <Link  to={{ pathname: '/post/'+index, state:  {post:post,posts:postOverview,id:id}  }}>  
      <div class="mask rgba-white-slight"></div></Link>

 
  </div>

  <div class="card-body card-body-cascade">

      <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> {postOverview.username}</h5>
     
      <h4 class="font-weight-bold card-title">{post.title}</h4>
    <p class="card-text">{post.subtitle}</p>
         

   
      <Link  className="btn btn-dark btn-rounded btn-sm my-0" to={{ pathname: '/post/'+index, state:  {post:post,posts:postOverview,id:id} }}><i class="fab fa-readme"></i> </Link> 
    
      <Link  className="btn btn-info btn-rounded btn-sm my-0" to={{ pathname: '/edit/'+index, state:  {posts:postOverview, post:post,id:id} }}><i class="fas fa-edit"></i> </Link> 
    
  
             <button type="button"   class="btn btn-danger btn-rounded btn-sm my-0"><i class="fas fa-trash"
             
             onClick={() => {
             



            postOverview.Posts.splice(index, 1);
           
              console.log('array',postOverview);
               let updated =  fire.update(postOverview,id);
               if(updated){
               console.log('Deleted');
               return <Redirect to="/posts/" />
              
              
               }





            }}
             ></i></button>
               
          

  </div>


</div>
</div>

      );
         })}
</div>
    );
}else {
return <div> No posts as yet</div>

}
}

export default Post;
