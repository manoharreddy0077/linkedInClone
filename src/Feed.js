import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption'
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NotesIcon from '@mui/icons-material/Notes';
import Post from './Post';
import {db } from './firebase';
import {firebase} from './firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {

  const user=useSelector(selectUser);
  const [input,setInput]=useState('');
    const [posts,setPosts]=useState([]) ;

    useEffect(()=>{
          db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
            setPosts(
                snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
            )
          );
          console.log("use effect")
    },[])
    const  sendPost=(e)=>{
        e.preventDefault()
        // by default when enter is clicked the page will be refreshed so to prevent it and keep our input text still we use e.prventdefault 
        db.collection('posts').add({
          name:user.displayName,
          description:user.email,
          message:input ,
          phtotUrl:user.photoUrl || " ",
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        console.log("hey put in db posts")
        setInput("");
    };
    
  return (
    <div className='feed'>
      <div className="feed_inputContainer">
        <div className="feed_input">
            <CreateIcon/>
            <form action="">
            {/* e=>setInput(e.target.value)   */}
                <input value={input}  onChange={e=>setInput(e.target.value) }type="text" />
                <button onClick={sendPost} type='submit'>Send</button>
            </form>
        </div>
        <div className="feed_inputOptions">
            <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
            <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
            <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
            <InputOption Icon={NotesIcon} title='Write article' color="#7FC15E"/>
        </div>
      </div>
      <FlipMove>
      {posts.map(({id,data:{name,description,message,photoUrl}})=>(
          <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          />
      ))}
      </FlipMove> 
    </div>
  )
}

export default Feed
