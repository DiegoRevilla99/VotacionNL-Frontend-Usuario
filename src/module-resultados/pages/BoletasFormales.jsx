import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { SearchCustome } from '../components/SearchCustome'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { GridBoletas } from '../components/GridBoletas';

export const BoletasFormales = () => {
  return (
    <Box display={"flex"} flexDirection="column" alignItems={"center"} justifyContent="center" sx={{mt:5,width:"100%", height:"auto" }}>
          <Typography sx={{ mb:5 ,fontSize:"20px",fontWeight:"bold"}}>Elige</Typography>
          <SearchCustome></SearchCustome>
          <Box display={"flex"} flexDirection="column" alignItems={"center"} sx={{p:2, mt:5,width:"90%", borderRadius:"20px", height:"auto", background:"#fff", boxShadow:3 }}>
                    {/* <Typography sx={{ mb:2 ,}}>Elecciones recientes</Typography> */}
                    <Box sx={{width:"100%" ,p:3,mt:3 }}>
                            <GridBoletas/>          
                    </Box>

                      
          </Box>
                    
    </Box>
  )
}
