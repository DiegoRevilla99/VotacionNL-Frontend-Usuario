import { Box } from '@mui/material'
import React from 'react'
import { ConsultasCard } from './ConsultaCard'
import { EleccionCard } from './EleccionCard'

export const GridConsultas = ({more=false ,jornada=[1,2,3,4]}) => {
  return (
    <Box  display={"flex"} gap="50px" flexWrap="wrap" justifyContent={"space-around"} width={"100%"}>
{
    jornada.map(()=>(
        <ConsultasCard/>
    ))
}
    </Box>
  )
}
