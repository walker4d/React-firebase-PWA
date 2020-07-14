import React from 'react';
import {


  Link,Redirect

} from "react-router-dom";
import fire from '../config/Fire';

const BlogOverview =(props)=> {
    
 
const post = props.location.state.post;
const posts = props.location.state.posts;     

console.log('id  from the overview view',props.location.state.id);
const {id} = props.match.params;
console.log(id);
    return (

        <div className="  " style={{containerEdit}}>
       
<div className=" card card-image" style={{
         backgroundImage: `url(${post.ImageUrl})`,backgroundRepeat: 'no-repeat'
      }}>
  <div className="text-white text-center rgba-stylish-strong py-5 px-4">
    <div className="py-5">

    <h2 className="card-title h2 my-4 py-2">{post.title}</h2>
      <p className="mb-4 pb-2 px-md-5 mx-md-5">Your Post</p>

<h5 className="h5 orange-text"><i className="fas fa-camera-retro"></i> {posts.username} </h5>

    </div>
  </div>
</div>
<hr/>
<div>    
</div>
<div className="container-fluid">
<div class="jumbotron jumbotron-fluid">
  <div class="container">
  <Link  className="btn btn-info btn-rounded btn-sm my-0" to={{ pathname: '/edit/'+id, state:  {post:post,posts:posts,id:props.location.state.id} }}><i class="fas fa-edit"></i> </Link> 
    
       <button type="button"   class="btn btn-danger btn-rounded btn-sm my-0"><i class="fas fa-trash"
             
             onClick={() => {             



            posts.Posts.splice(id, 1);
           
              console.log('array',posts);
               let updated =  fire.update(posts,props.location.state.id);
               if(updated){
               console.log('Deleted');
               return <Redirect to="/posts/" />
              
              
               }





            }}
             ></i></button>

    <h2 class="display-4">{post.subtitle}</h2>
    <p class="lead">{post.Message}  </p>
  </div>
</div>

</div>

        </div>
    );
 }


const containerEdit ={

    margin:0,
    padding: 0
};
export default BlogOverview;
