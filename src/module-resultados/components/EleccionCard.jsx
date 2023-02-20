import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const EleccionCard = () => {
   const navigate=useNavigate();

   const goTo=(url)=>{
    navigate(url)
   }

  return (
    <Box display={"flex"} flexDirection="column"  alignItems={"center"} sx={{width:"250px", height:"auto", background:"#543884", color:"#fff", boxShadow:4, borderRadius:"10px"}}>
     <Box sx={{width:"calc(100% + 15px)", height:"25px", background:"#f8de7e",boxShadow:5}}></Box>
      <Typography sx={{fontSize:"20px", mt:2,mb:1,fontWeight:"bold"}} textAlign={"center"}>Jornada 2023-2024</Typography>
      <Box display={"flex"} flexDirection="column"  alignItems={"center"} sx={{p:3}}>
      <Typography textAlign={"center"} >Informacion extra de la jornada</Typography>
      <Button onClick={()=>goTo("/resultados/boletas-formales")} sx={{mt:2, background:"#fff", color:"#000"}} color='inherit' variant="contained">Entrar</Button>
      </Box>

    </Box>
  )
}