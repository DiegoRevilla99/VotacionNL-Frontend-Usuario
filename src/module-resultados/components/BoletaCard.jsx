import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const BoletaCard = () => {
    const navigate=useNavigate();

    const goTo=(url)=>{
      console.log("entre")
     navigate(url)
    }
 
   return (
     <Box display={"flex"} flexDirection="column"  alignItems={"center"} sx={{p:2,width:"250px", height:"auto", background:"#2D2B28", color:"#fff", boxShadow:6, borderRadius:"1px"}}>
      <Box sx={{background:"#f5e1ce",boxShadow:2,borderRadius:"10px",color:"#000"}}>
      <Typography sx={{fontSize:"18px", mt:2,mb:1,fontWeight:"bold"}} textAlign={"center"}>GOBERNATURA 2023-2024</Typography>
       <Box display={"flex"} flexDirection="column"  alignItems={"center"} sx={{p:3}}>
       <Typography textAlign={"center"} >Entra para ver los resultados</Typography>
       <Button  sx={{mt:2,background:"#2D2B28", color:"#fff"}}  onClick={()=>{goTo("/resultados/result-formales/")}} variant="contained">Ver resultados</Button>
       </Box>

      </Box>
       
     </Box>
   )
}
