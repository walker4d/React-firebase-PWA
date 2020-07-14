import * as firebase from 'firebase';

import "firebase/auth";
import "firebase/firestore";

const firebaseApp= firebase.initializeApp({
   
  apiKey: "AIzaSyDr47I_BFURSpsScpNz4Xrc4r4ZB8dSfwY",
  authDomain: "react-fire-2cc58.firebaseapp.com",
  databaseURL: "https://react-fire-2cc58.firebaseio.com",
  projectId: "react-fire-2cc58",
  storageBucket: "react-fire-2cc58.appspot.com",
  messagingSenderId: "559977633085",
  appId: "1:559977633085:web:f6005a657adf3acc25e154",
  measurementId: "G-BSJNRHT7M3"
  });
class Fire{
    constructor(){
        
this.auth = firebase.auth();
this.db = firebase.firestore();
this.users = this.db.collection("users");
this.id = null;

    }

    login(email,password){
        return this.auth.signInWithEmailAndPassword(email,password)
    }

    logout(){
        return this.auth.signOut()
    }
    async register(username,email, password){
        await this.auth.createUserWithEmailAndPassword(email,password)

        return this.auth.currentUser.updateProfile({
            displayName: username
        })
    }
    addDetail(username,firstname,lastname,email){
        return this.db.doc(`users/${this.auth.currentUser.uid}`).set({
            username:username,firstname:firstname,lastname:lastname,email, Posts:[]
        })
     }

     createPost(post){


    console.log(post);
this.users.doc(post.id).update({
    
    Posts: post.Posts});

return true;
     }

     search(email){
        let userdata = {
            Posts:[],
            email:null,
           id: null,
            username:null,
            firstname:null,
            lastname:null
        

            
            }
         


     this.users.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
          if(email == doc.data().email){
     
            userdata.email = doc.data().email;
            userdata.firstname = doc.data().firstname;
        
            userdata.lastname = doc.data().lastname;
            userdata.username = doc.data().username;
            userdata.Posts = doc.data().Posts.slice();;
         //   userdata.Posts.push(Post);
         userdata.id = doc.id;
     
         //   console.log('ID1', userdata ); 
            
          }
               
               
            });
  
            //console.log('userdata',userdata, 'Id', doc.id);

    
          //  console.log('ID2', userdata );
         

        });


        //console.log('ID3', userdata );
     
        return userdata;
    }

     getAllPost(){
        let data = null;
        this.users.get().then(querySnapshot => {
        data  = querySnapshot.docs.map(doc => doc.data());
        
        });

        return data;
     }

     getAllUserPost(){}

     updatePost(){}

     deletePost(){}
update(posts,id){
    
this.users.doc(id).update({ Posts: posts.Posts});

return true;

    
  


}
     
}

export default new Fire();
  //firebase.initializeApp(firebaseConfig);
 // export const auth = firebase.auth();
  //export const firestore = firebase.firestore();
  //const fire = firebase.initializeApp(config);
 