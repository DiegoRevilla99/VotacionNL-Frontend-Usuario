import { Box } from '@mui/material'
import React from 'react'
import { BoletaCard } from './BoletaCard'
import { BoletaConsultaCard } from './BoletaConsultaCard'
import { EleccionCard } from './EleccionCard'

export const GridBoletasConsultas = ({more=false ,jornada=[1,2]}) => {
  return (
    <Box  display={"flex"} gap="60px" flexWrap="wrap" justifyContent={"center"} width={"100%"}>
{
    jornada.map(()=>(
        <BoletaConsultaCard/>
    ))
}
    </Box>
  )
}
