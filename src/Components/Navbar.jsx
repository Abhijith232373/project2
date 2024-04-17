import { AppBar, Box, Button, Toolbar} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navbar = () => {
  
  return (
    <div>
          
        <Box sx={{ flexgrow: 5}}>
        <AppBar position="static" color="error" style={{height:'100px'}}>
            <Toolbar>
            <img
                           src="https://dynamic.design.com/asset/logo/2a446ea5-c4cc-44c4-90c1-7956c448b869/logo-search-grid-1x?logoTemplateVersion=2&v=638336435183700000&text=KABAB+Restaurant"
                            width="160" height="102.9"></img>
         {/* <form class="form-filled">
             <input style={{marginLeft:"700px"}} type="search" placeholder="Search"/>&nbsp;
             <button  type="submit">Search</button>&nbsp;&nbsp;
         </form>  */}
         &nbsp;&nbsp;&nbsp;
         <Button variant='contained' style={{padding:'.99px'}} color='error'>
          <Link to={'/Home'} style={{textDecoration:'none', color:'white'}}>
            HOME</Link>
            </Button>&nbsp;&nbsp;
            {/* <Button variant='contained' style={{marginLeft:"800px",padding:'.95px'}} color='error'>
          {/* <Link to={'/Dashborad'} style={{textDecoration:'none', color:'white'}}>
            DASHBORAD</Link> 
             </Button>&nbsp;&nbsp; 
            */} 

          <Button variant='contained' style={{marginLeft:"800px" ,padding:'.95px'}} color='error'>
          <Link to={'/log'} style={{textDecoration:'none', color:'white'}}>
          Login  
          </Link>
          </Button>&nbsp;&nbsp;&nbsp;
          <Button variant='contained' style={{padding:'.95px'}} color='error'>
          <Link to={'/sign'} style={{textDecoration:'none', color:'white'}}>
            
            Sign up</Link></Button>
            </Toolbar>
          </AppBar> 
        </Box>
       
        
        
</div>
  )
}

export default Navbar