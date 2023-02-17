import { Box } from '@mui/material'
import React from 'react'
import { ConsultasCard } from './ConsultaCard'
import { EleccionCard } from './EleccionCard'

export const GridConsultas = ({more=false ,jornadas=[]}) => {
  return (
    <Box  display={"flex"} gap="50px" flexWrap="wrap" justifyContent={"space-around"} width={"100%"}>
{
    jornadas.map((jornada)=>(
        <ConsultasCard jornada={jornada}/>
    ))
}
    </Box>
  )
}
