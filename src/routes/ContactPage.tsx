import {Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  return (
   <>
   <Box sx={{width:'100vw', height:'100vh', background:'rgb(7, 12, 28)'}}>
        <Navbar />
        <Typography>Contact Me</Typography>
      </Box>
   </>
  )
}

export default ContactPage;
