import React, { useContext,useState  } from 'react';

import {AuthContext} from "../config/Auth";
import fire from '../config/Fire';
import {  
    Link
  } from "react-router-dom";
import Post from './Post';
const Posts = () => {
  
  const {currentUser} = useContext(AuthContext);
  
// console.log(currentUser);
const [PostState, setPostState] = useState();
const [id,setId] = useState();
  fire.users.where("email", "==", currentUser.email)
  .get()
  .then(querySnapshot => {
    setId(querySnapshot.docs.map(doc => doc.id).join());

 setPostState(querySnapshot.docs.map(doc => doc.data())[0]);
  //  console.log('post',PostState); // array of cities objects
  
  }) 
  

const data =  fire.search(currentUser.email);
//  console.log('PostState',PostState);
//  console.log('data',data);

 let props = {
  id: id,
  posts:PostState
  };

 if(typeof PostState !== 'undefined')  
 return (
        <div>
            
        <div className="  " style={{containerEdit}}>
       
       <div className=" card card-image" style={background}>
         <div className="text-white text-center rgba-stylish-strong py-5 px-4">
           <div className="py-5">
       
             <h2 className="card-title h2 my-4 py-2">Welcome To Boku  
    </h2>  <h5 className="orange-text"><i className="fas fa-camera-retro"></i>{currentUser.displayName}</h5>
             <br/>
             <Link  className="btn btn-primary" to={{ pathname: '/'}}>View Other Post</Link>

       
      
       
           </div>
         </div>
       </div>
       <hr/>
       <div className="container-fluid">
       <div class="jumbotron jumbotron-fluid">
         <div class="container">
         <Link  className="btn btn-success btn-rounded btn-sm my-0" to={{ pathname: '/Create/', state:{data}  }}>Create Post</Link> 

         </div>

   </div>
   <div >
  
      <Post post={props} />
 
      
     
        
         </div>
       </div>




     


       
               </div>
               </div>
           );

return(
<div>Loading...</div>
);


        }


        const img='https://images2.alphacoders.com/103/1039239.jpg';
        const background = {
        
            backgroundImage: "url("+{img}+")"
           
        
        };
        
        const containerEdit ={
        
            margin:0,
            padding: 0
        };
         
   
 
       
export default Posts;
