import React,{forwardRef} from 'react'
import "./Post.css"
import { Avatar} from '@material-ui/core'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbsUpDownOutlined } from '@material-ui/icons'
import InputOption from './InputOption'


const  Post=forwardRef(({name,description,message,photoUrl},ref)=> {
  

  return (
    <div  ref={ref} className='post'>
        <div className="post_header">
      <Avatar src={photoUrl}>{name}</Avatar >
        <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </div>
    <div className="post_body">
         <p>{message}</p>
    </div>

    <div className="post_buttons">
        <InputOption Icon={ThumbsUpDownOutlined} title="Like" color="gray"/>
        <InputOption Icon={ChatOutlined} title="Comment" color="gray"/>
        <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
        <InputOption Icon={SendOutlined} title="Send" color="gray"/>
    </div>
    </div>

  )
})

export default Post
