import { Box, Typography } from "@mui/material";


const HomeBody = () => {
  const bioPara_1 = 'Hi, I am Pradosh, a frontend developer based on Bengaluru, India.';
  const bioPara_2 = 'I have experience in crafting beutiful and functional websites and also a passion for creating intuitive user experience';
  return (
   <>
    <Box sx={{mt:'8%', alignItems:'center', justifySelf:'center'}}>
        <Typography sx={{color:'white', justifySelf:'left', fontSize:'92px', fontWeight:1000, alignSelf:'center'}}>FRONTEND DEVELOPER</Typography>
         <Typography sx={{mt:'3%',color:'white', justifySelf:'left', fontSize:'24px', alignSelf:'center'}}>{bioPara_1}</Typography>
         <Typography sx={{color:'white', justifySelf:'left', fontSize:'24px', alignSelf:'center'}}>{bioPara_2}</Typography>
    </Box>
   </>
  )
}

export default HomeBody;
