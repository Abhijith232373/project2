import React from 'react'
import Image from './Image/ss.png'
import { Typography } from '@mui/material';

const Home = () => {
    const backgroundImageStyle={
        position: 'fixed',
        top:10,
        left:0,
        width:'100%',
        height:'100%',
        zIndex: -1,
        backgroundRepeat:'no-repeat',
        heght:'100vh',
        fontsize:'10px',
      };


  return (
    <div>
     <img
     src={Image}
     alt="bac"
     style={backgroundImageStyle}
     />
   
    <div style={backgroundImageStyle}>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
     <Typography variant="h4" color={'white'} align='center' >
     welcome to
     </Typography>
     <br />
     <Typography variant="h1" color={'white'} align='center'>
     KABAB
     RESTAURANT
     </Typography>
     </div>
     </div>
  )
  }


export default Home