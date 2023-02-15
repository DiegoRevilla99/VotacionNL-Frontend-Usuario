import { useTheme } from '@mui/material/styles';
import { ThemeProvider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { OptionCard } from '../components/OptionCard'
import { ChartEjemplo } from '../components/formales/chartEjemplo';

export const IniciosResultados = () => {
    const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
        <Box display={"flex"}  alignItems="center"  flexDirection={"column"} justifyContent="center" width="100%">
        <Typography variant="h4" sx={{fontSize:"30px",fontWeight:"bold",mt:5,p:4}} textAlign={"center"}>RESULTADOS</Typography>
        <Box display={"flex"} alignItems="center" justifyContent="center" flexWrap={"wrap"}>
            
            <Box sx={{p:4}}>            
              <OptionCard type={1} url="/resultados/formales" name="ELECCIONES ELECTORALES"></OptionCard>
            </Box>
            
            <Box sx={{p:4}}>
              <OptionCard type={3} url="/resultados/consultas"  name="CONSULTAS CIUDADANAS"></OptionCard>
            </Box>
            <Box sx={{p:4}}>
            
            <OptionCard type={2} url="/resultados/noformales"  name="OTRAS ELECCIONES"></OptionCard>
            </Box>
        </Box>
    </Box>
    </ThemeProvider>
    
   
  )
}
