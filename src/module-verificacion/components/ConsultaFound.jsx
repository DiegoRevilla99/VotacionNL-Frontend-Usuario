import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Box, Button, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { onGetData } from "../../store/verificacion-voto/verificacionThunks";
import { useVerficacionStore } from '../hooks/useVerificacionStore';
// import { ModalBoleta } from "./ModalBoleta";
import HelpIcon from '@mui/icons-material/Help';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
const HtmlTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#8A2BE2', // Color morado
    color: 'white', // Texto en color blanco
    maxWidth: 300, // Ancho máximo del Tooltip
    fontSize: theme.typography.pxToRem(20), // Tamaño de fuente grande
    border: '1px solid #dadde9',
  },
}));
export const ConsultaFound = () => {

	const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();

    const plantilla2 = () => {
      navigate("/verificacion/individual");
    };
    const { votos } = useVerficacionStore();

    console.log("VOTOOOOOOOOOOS",votos);

	return (
		<Box pt="1.5rem"
        sx={{						
            height: "auto",
            flexGrow: 1,
            overflowY: { sx: "none", md: "auto" },
          }}>
			<Container
				maxWidth="lg"
                sx={{
                    boxShadow: 1,
                    backgroundColor: "white",
                    borderRadius: { xs: "1rem", md: "2rem" },
                              overflowY: "auto",
                    p: "2rem",    
                  }}
			>
				<Box sx={{ width: "100%" }}>

        <Box align="right" mr={3}>
        <HtmlTooltip placement="right"
        title={
          <React.Fragment>
            <Typography color="inherit" sx={{
							fontSize: {
								xs: "0.9rem",
								sm: "0.9rem",
								md: "0.9rem",
								lg: "1rem",
								xl: "1rem",
							},
						}}>A continuación se muestra la información asociada al folio que ingresó anteriormente.</Typography>
            {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"} */}
          </React.Fragment>
        }
      >
		<HelpIcon color="primary" fontSize="large"/>
      </HtmlTooltip>
          </Box>
                    <Box 
                    align="center">
					<Typography
						color="initial"
						mb="0.5rem"
						align="center"
						sx={{
							fontSize: {
								xs: "1.2rem",
                                sm: "1.2rem",
								md: "1.2rem",
								lg: "1.2rem",
								xl: "1.2rem",
							},
						}}
					>
						LA BOLETA ELECTORAL CON FOLIO:
                        </Typography>
                    <Typography
                        color="primary"
                        mb="1rem"
                        align="center"
                        sx={{
                            fontSize: {
                                xs: "1.3rem",
                                sm: "1.3rem",
                                md: "1.4rem",
                                lg: "1.4rem",
                                xl: "1.4rem",
                            },
                        }}
                    > 
                        {params.folio}
                    </Typography>
                    <Typography
                        color="initial"
                            mb="0.5rem"
                            align="center"
                            sx={{
                                fontSize: {
                                    xs: "1.2rem",
                                    sm: "1.2rem",
                                    md: "1.2rem",
                                    lg: "1.2rem",
                                    xl: "1.2rem",
                                },
                            }}
                        > 
                        LA CONSULTA PRESENTA LOS SIGUIENTES DATOS:
					</Typography>


                    <Grid container spacing={2} justifyContent="center" alignItems="center" mt={1}>

      <Card sx={{ height: '100%' , backgroundColor: '#E5CCFF' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Pregunta: {votos.pregunta.descPregunta}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          ID Pregunta: {votos.pregunta.idPregunta}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          Tipo de respuesta: '{votos.pregunta.tipoRespuesta}'
          </Typography>
          <Typography variant="h6" gutterBottom>
            Respuesta: {votos.datosDeLaBd.sentidoModel.respuesta}
          </Typography>

          <Typography color="textSecondary">
            ID de selección: {votos.datosDeLaBd.sentidoModel.idSeleccion}
          </Typography>
        </CardContent>
      </Card>
    </Grid>










                    {/* <Box
                    mb={2}>
                    <Button 
                        startIcon={<PreviewIcon size="Large"/>}
                        onClick={handleOpenModal}
                        sx={{
                            backgroundColor: "#511079",
                            color: "#fff",
                            fontSize: {
                                xs: "1rem",
                                sm: "1rem",
                                md: "1rem",
                                lg: "1rem",
                                xl: "1rem",
                            },
                            textAlign: "center",
                            width: {
                                xs: "80%",
                                sm: "70%",
                                md: "60%",
                                lg: "50%",
                                xl: "50%",
                            },
                            // height: "10%",
                            "&:hover": {
                                background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
                                color: "#FFFFFF",
                            },
                        }}>
                        MOSTRAR BOLETA
                        </Button>
                    </Box> */}
<Box mt={5}>
  <Stack direction="column" alignItems="center">
    <Button 
      startIcon={<PersonSearchIcon size="Large"/>}
      onClick={plantilla2}
      sx={{
        fontSize: "1.3rem",
        // width: "200px",
        width: {
            xs: "200px",
            sm: "200px",
            md: "350px",
            lg: "350px",
            xl: "350px",
        },
        height: "50px",
        backgroundColor: "#7E328B",
        color: "#FFFFFF",
        "&:hover": {
          background: "linear-gradient(45deg, #cc99ff 30%, #cc99ff 90%)",
          color: "#7E328B",
        },
      }}>
      Ingresar otro folio
    </Button>
  </Stack>
</Box>
                    </Box>
				</Box>
			</Container>
            {/* <ModalBoleta statusModal={statusModal} handleToggleModal={handleCloseModal} /> */}
		</Box>
	);
};
