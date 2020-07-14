import React from 'react';

const BlogOverview =(props)=> {
    
 
      
const post = props.location.state.post;
console.log(post);
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
      <p className="mb-4 pb-2 px-md-5 mx-md-5"></p>

<h5 className="h5 orange-text"><i className="fas fa-camera-retro"></i> {post.username} </h5>

    </div>
  </div>
</div>
<hr/>
<div className="container-fluid">
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h2 class="display-4">{post.subtitle}</h2>
    <p class="lead"> {post.Message} </p>
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
