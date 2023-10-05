import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from "@material-ui/icons/Home"
// import  SupervisiorAccountIcon from "@material-ui/icons/SupervisiorAccount"
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';
import { selectUser } from './features/userSlice';



function Header() {
  const user=useSelector(selectUser) //selectUser is our selector
  const dispatch=useDispatch();

  const logoutOfApp=()=>{
    dispatch(logout())
    auth.signOut();

  }
  return (
    <div className='header'>


      <div className="header_left">
        <img src="./linkedinlogo.png" alt="ushhhh" />
        <div className="header_search">
            <SearchIcon/>
            <input placeholder='Search' type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title={'Home'}/>
        <HeaderOptions Icon={PeopleIcon} title={'My Network'}/>
        <HeaderOptions Icon={BusinessCenterIcon} title={'Jobs'}/>
        <HeaderOptions Icon={ChatIcon} title={'Messaging'}/>
        <HeaderOptions Icon={NotificationsActiveIcon} title={'Notifications'}/>
        <HeaderOptions  
        avatar={true} 
        title="me"
        onClick={logoutOfApp}
        />

      </div>
    </div>
  )
}

export default Header
