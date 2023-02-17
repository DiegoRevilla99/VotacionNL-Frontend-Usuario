import { Box, CircularProgress, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { SearchCustome } from '../components/SearchCustome'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { GridBoletas } from '../components/GridBoletas';
import { GridBoletasConsultas } from '../components/GridBoletasConsultas';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPapletas } from '../../store/resultados-consultas/consultasThunks';

export const BoletasConsultas = () => {
  const {id}=useParams();
  const dispatch = useDispatch();
  const {
    papeletas,isLoadingPapeletas,
  } = useSelector((state) => state.consultas);

  useEffect(() => {
    dispatch(getPapletas(id))
  }, [])
  
  return (
    <Box display={"flex"} flexDirection="column" alignItems={"center"} justifyContent="center" sx={{mt:5,width:"100%", height:"auto" }}>
          <Typography sx={{ mb:5 ,fontSize:"20px",fontWeight:"bold"}}>Elige</Typography>
          <SearchCustome></SearchCustome>
          <Box display={"flex"} flexDirection="column" alignItems={"center"} sx={{p:2,pt:4, mt:5,width:"90%", borderRadius:"20px", height:"auto", background:"#fff", boxShadow:3 }}>
                    <Typography sx={{fontSize:"25px", fontWeight:"bold"}}>Resultados encontrados:</Typography>
                    {
                      isLoadingPapeletas ?
                      <Stack
                          justifyContent="center"
                          sx={{ color: "grey.500" }}
                          spacing={2}
                          direction="row"
                        >
                          <CircularProgress color="primary" />
                        </Stack>
                      :
                      <Box sx={{width:"100%" ,p:3,mt:3 }}>
                      
                            <GridBoletasConsultas papeletas={papeletas}/>          
                    </Box>
                    }
                    

                      
          </Box>
                    
    </Box>
  )
}
