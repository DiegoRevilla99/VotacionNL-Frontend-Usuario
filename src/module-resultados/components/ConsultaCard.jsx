import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ConsultasCard = () => {
   const navigate=useNavigate();

   const goTo=(url)=>{
    navigate(url)
   }

  return (
    <Box display={"flex"} flexDirection="column"  alignItems={"center"} sx={{width:"250px", height:"auto", background:"#000", color:"#fff", boxShadow:4, borderRadius:"12px"}}>
     <Box sx={{width:"calc(100% + 15px)", height:"25px", background:"#C80AAE",boxShadow:5}}></Box>
      <Typography sx={{fontSize:"20px", mt:2,mb:1,fontWeight:"bold"}} textAlign={"center"}>JORNADA CONSULTA</Typography>
      <Box display={"flex"} flexDirection="column"  alignItems={"center"} sx={{p:3}}>
      <Typography textAlign={"center"} >Informacion extra de la consulta</Typography>
      <Button onClick={()=>goTo("/resultados/boletas-consultas")} sx={{mt:2, background:"#fff", color:"#000"}} color='inherit' variant="contained">Entrar</Button>
      </Box>

    </Box>
  )
}
