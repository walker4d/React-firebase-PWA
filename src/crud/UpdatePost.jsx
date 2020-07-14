import React, { useCallback } from 'react';
import {
   
    Redirect
  } from "react-router-dom";
  
import fire from '../config/Fire';

const UpdatePost = (props) => {

 const uid = props.location.state.id;
const post = props.location.state.post;
const posts = props.location.state.posts;     

console.log('uid',props.location.state);

const {id} = props.match.params;
console.log(id);


const handleUpdate = useCallback(
    async event => {
 
 event.preventDefault();
 
 
 
 try{
     const {Title, subTitle,ImageUrl,Message} = event.target.elements;
     if(Title !== '' && subTitle!==''&& ImageUrl !== ''&& Message !== ''){
     post.title =  Title.value;
post.subtitle = subTitle.value;
post.ImageUrl = ImageUrl.value;
post.Message =  Message.value;

posts.Posts[id] = post;

console.log('Property of Post:', posts.Posts[id]);

   let updated =  await fire.update(posts,uid);
if(updated){
console.log('updated');
alert('updated');
return <Redirect to="/Posts" />


}


     }else {
        alert('please enter in the files'); 
     }

 }catch(error){
     alert(error)
 }
 
    }
 
 ,);



    return (
        <div>

<form class="text-center border border-light p-5" onSubmit={handleUpdate}>

    <p class="h4 mb-4">Update Post</p>

    <input type="text" name ="Title" class="form-control mb-4" placeholder={post.title}/>
    <input type="text"  name="subTitle" class="form-control mb-4" placeholder={post.subtitle}/>
    <input type="text" name ="ImageUrl"  class="form-control mb-4" placeholder={post.ImageUrl}/>
    
    <div class="form-group">
        <textarea  name="Message" class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder={post.Message}></textarea>
    </div>


    <button class="btn btn-info btn-block" type="submit">Update</button>

</form>
        </div>
    );
}

export default UpdatePost;
