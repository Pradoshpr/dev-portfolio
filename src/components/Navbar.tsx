import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTab } from "../redux/reducers/dashboardSlice";
import prIcon from '../assets/pr.png'

const Navbar = () => {
    const dispatch = useDispatch();
    const tabSelected = useSelector((state: any) => state.dashboard.selectedTab);

    const ChangeTabs = (tabName: string) => {
        dispatch(setSelectedTab(tabName));
    }

  return (
    <>
        
        <Box sx={{width:'100%', display:'flex'}}>
            <Box sx={{width:'40%'}}>
                <img src={prIcon} alt='' style={{width:'20%'}} />
            </Box>
           <Box sx={{
                    width: '60%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box sx={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        padding: 2,
                        borderRadius: 2,
                    }}>
                    {['Home', 'About', 'Experience', 'Contact'].map((text) => (
                        <Typography key={text} sx={{
                                                    color: 'white',
                                                   
                                                    fontWeight: text === tabSelected ? '600' : '400',
                                                    position: 'relative',
                                                    cursor: 'pointer',
                                                    '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    left: 0,
                                                    bottom: -4,
                                                    height: '4px',
                                                    width: text === tabSelected ? '100%' : '0',
                                                    background: "linear-gradient(341deg, #FF90C6 -6.57%, #9881DD 38%, #0D6EFD 104.57%)",
                                                    transition: 'width 0.3s ease',
                                                    borderRadius:'22px',
                                                    },
                                                    '&:hover::after': {
                                                    width: '100%',
                                                    },
                                                }}
                                    onClick={() => ChangeTabs(text)}>{text}</Typography>
                    ))}
                </Box>
          </Box>
        </Box>
        
    </>
  )
}

export default Navbar;
