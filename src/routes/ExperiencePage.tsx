import {Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';

const ExperiencePage = () => {
  return (
  <>
  <Box sx={{width:'100vw', height:'100vh', background:'rgb(7, 12, 28)'}}>
        <Navbar />
        <Typography>My Experience</Typography>
      </Box>
  </>
  )
}

export default ExperiencePage;
