import { Box } from "@mui/material";
import Navbar from '../components/Navbar';
import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import MyProfile from '../components/MyProfile';
const AboutPage = () => {
  return (
    <>
    <Box sx={{width:'100vw', height:'100vh', background:'rgb(7, 12, 28)'}}>
        <Navbar />
        <Box sx={{display:'flex', justifySelf:'center'}}>
            <Box sx={{width:'35vw',height:'83vh'}}>
                <AboutMe />
            </Box>
             <Box sx={{width:'30vw',height:'83vh'}}>
                <MyProfile />
            </Box>
             <Box sx={{width:'35vw',height:'83vh'}}>
                <MySkills />
            </Box>
             
            
        </Box>
       
      </Box>
    </>
  )
}

export default AboutPage;
