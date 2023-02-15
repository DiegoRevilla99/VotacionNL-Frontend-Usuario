import { Box } from '@mui/material'
import React from 'react'
import { BoletaCard } from './BoletaCard'
import { EleccionCard } from './EleccionCard'

export const GridBoletas = ({more=false ,jornada=[1,2]}) => {
  return (
    <Box  display={"flex"} gap="60px" flexWrap="wrap" justifyContent={"center"} width={"100%"}>
{
    jornada.map(()=>(
        <BoletaCard></BoletaCard>
    ))
}
    </Box>
  )
}
