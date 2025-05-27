import { Box, Typography, Button, Grid } from "@mui/material"
import { portfolioData } from "../data/portfolioData"


const MySkills = () => {
  const skills = portfolioData[0]?.skills;
  const randomIntInRange = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };
  const numCols = Math.ceil(skills.length / 3);
  const handleHover = (bool: boolean) => {
    if(bool == true){

    }
  }
  return (
   <>
   <Box sx={{ mr:'1%'}}>
    <Typography sx={{fontWeight:'600', fontSize:'20px', color:'white', justifySelf:'center'}}>My Expertise</Typography>
    <Box sx={{display:'flex', flexDirection:'column'}}>
      <Box sx={{height:'50%'}}>
         <Typography sx={{fontWeight:'400', fontSize:'18px', color:'white', justifySelf:'left'}}>Skills</Typography>
         <Box sx={{mt:'1%'}}>
         <Box sx={{ width: '100%' }}>
      <Grid container spacing={1}>
       {skills.map((skill, index) => {
        return(
          <>
            <Grid 
             item 
             xs={Math.floor(12 / numCols)} 
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}>
              <Button 
              sx={{
                px:(skill.value/10) - randomIntInRange(1,2),
                py:(skill.value/10) - randomIntInRange(5,7),
                
                 border: "2px solid transparent",
              borderRadius: 2,
              backgroundImage: `
                linear-gradient(rgb(7, 12, 28), rgb(7, 12, 28)), 
                linear-gradient(341deg, #FF90C6 -6.57%, #9881DD 38%, #0D6EFD 104.57%)
              `,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              transition: "all 0.3s ease-in-out",
              '&:hover':{
                px: 12,
                py: 9
              }
              }}
              onMouseEnter={()=>handleHover(true)}
              onMouseLeave={()=> handleHover(false)}
              >
                
                <img src={skill.logo} alt={skill.name} style={{width:'25px'}} />
              </Button>
            </Grid>
          </>
        )
       })}
      </Grid>
    </Box>
         </Box>
      </Box>
       <Box sx={{height:'50%', background:'orange'}}>
         <Typography sx={{fontWeight:'400', fontSize:'18px', color:'white', justifySelf:'left'}}>Tools</Typography>
      </Box>
    </Box>
   </Box>
   </>
  )
}

export default MySkills
