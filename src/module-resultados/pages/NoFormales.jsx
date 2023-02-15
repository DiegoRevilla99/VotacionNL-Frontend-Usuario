import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { GridCardsNF } from '../components/GridCardsNF'
import { SearchCustome } from '../components/SearchCustome'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
export const NoFormales = () => {
  return (
    <Box display={"flex"} flexDirection="column" alignItems={"center"} justifyContent="center" sx={{mt:5,width:"100%", height:"auto" }}>
          <Typography sx={{ mb:5 ,fontSize:"20px",fontWeight:"bold"}}>Busque la elección</Typography>
          <SearchCustome></SearchCustome>
          <Box display={"flex"} flexDirection="column" alignItems={"center"} sx={{p:2, mt:5,width:"90%", borderRadius:"20px", height:"auto", background:"#fff", boxShadow:3 }}>
          
                    
                    {/* <Typography sx={{ mb:2 ,}}>Elecciones recientes</Typography> */}
                    <Box sx={{width:"100%" ,p:3,mt:3 }}>
                                      <GridCardsNF/>
                      </Box>

                      <IconButton sx={{mt:2}}color="primary" aria-label="upload picture" component="label">
                      <Typography sx={{mr:2}}>Ver más</Typography>
                        <ExpandCircleDownIcon/>
                        
                    </IconButton>
          </Box>
                    
    </Box>
    
  )
}
