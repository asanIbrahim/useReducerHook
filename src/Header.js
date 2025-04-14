import React from 'react'
import './Header.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import YoutubeSearchedForSharpIcon from '@mui/icons-material/YoutubeSearchedForSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppIcon from '@mui/icons-material/AppsSharp';
import NotificationIcon from '@mui/icons-material/NotificationsActiveSharp';
const Header = () => {
  return (
    <div className='header'> 
   <div className='header-left'> 
   <MenuSharpIcon/>
   <img  className='header-logo'
    src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' 
    alt=''/>
  </div>
   <div className='header-input'>
   <input type='text' placeholder='Search'/>
    <YoutubeSearchedForSharpIcon className="header-inputButton"/>
    
   </div>
   <div className='header-right'>
   <VideoCallSharpIcon className='header-icons'/>
   <AppIcon className='header-icons'/>
  <NotificationIcon className='header-icons'/>
   </div>
    
   </div>

  )
}

export default Header