import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import HomeBody from "../components/HomeBody";
export default function HomePage() {

  return (
   <>
      <Box sx={{width:'100vw', height:'100vh', background:'rgb(7, 12, 28)'}}>
        <Navbar />
        <HomeBody />
      </Box>
   </>
  )
}
