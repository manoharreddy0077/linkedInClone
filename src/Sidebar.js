import React from 'react'
import "./Sidebar.css";
import  {Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user=useSelector(selectUser);


    const recentItem=(topic)=>{
        return (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
        )
    }
  return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <Avatar className='sidebar_avatar' src={user.photoUrl}>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                {/* why user.displayName cuz in redux dev tools we have that name value stored in displayname see pic dat e: 30/6/2023  */}
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar_stats'>
                <div className="sidebar_stat">
                    <p>who viwed u</p>
                    <p className="sidebar_statNumber">2534</p>
                    </div>
                <div className="sidebar_stat">
                    <p>views on post</p>
                    <p className="sidebar_statNumber">2,448</p>
                </div>
                </div>
            <div className="sidebar_bottom">
                <p>recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
            </div>
  )
}

export default Sidebar
