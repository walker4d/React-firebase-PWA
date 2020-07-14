import React, { useCallback } from 'react';
import {
  
     Redirect
  } from "react-router-dom";
  
import fire from '../config/Fire';
const CreatePost = (props) => {

    console.log('post',props.location.state.data);
    let Post = {
        title:null,
        subtitle:null,
        ImageUrl:null,
        Message:null
      
      }
    const handleCreate = useCallback(
        async event => {
     
     event.preventDefault();
     
     
     
     try{
         const {Title, subTitle,ImageUrl,Message} = event.target.elements;
         Post.title =  Title.value;
Post.subtitle = subTitle.value;
Post.ImageUrl = ImageUrl.value;
Post.Message =  Message.value;
     props.location.state.data.Posts.push(Post);
   console.log('Property of Post:', props.location.state.data);
       let save =  await fire.createPost(props.location.state.data);
if(save){
    console.log('Redirect');
    alert('created');
    return <Redirect to="/posts/" />
}
        
    
     }catch(error){
         alert(error)
     }
     
        }
     
     ,);




    return (
        <div>

<form class="text-center border border-light p-5"  onSubmit={handleCreate}>

    <p class="h4 mb-4">Create Post</p>

    <input type="text"  class="form-control mb-4" name ="Title" placeholder="Post Title"/>
    <input type="text"  class="form-control mb-4" name="subTitle" placeholder="Post description"/>
    <input type="text"  class="form-control mb-4" name ="ImageUrl" placeholder="enter Image Url here "/>
    
    <div class="form-group">
        <textarea class="form-control rounded-0" id="exampleFormControlTextarea2"  name="Message" rows="3" placeholder="Type your post here..."></textarea>
    </div>


    <button class="btn btn-info btn-block" type="submit">Create</button>

</form>
        </div>
    );
}

export default CreatePost;
