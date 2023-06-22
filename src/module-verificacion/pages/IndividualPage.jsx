import HelpIcon from '@mui/icons-material/Help';
import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/system";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { onError } from "../../store/verificacion-voto/verificacionSlice";
import { onGetValidarVoto, onGetValidarVotoConsulta, onGetValidarVotoNFML } from "../../store/verificacion-voto/verificacionThunks";

const HtmlTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#8A2BE2', // Color morado
    color: 'white', // Texto en color blanco
    maxWidth: 300, // Ancho máximo del Tooltip
    fontSize: theme.typography.pxToRem(16), // Tamaño de fuente grande
    border: '1px solid #dadde9',
  },
}));
const TooltipContainer = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  });
const validationSchema = object({
	folio: string("").required("Este campo es requerido").matches(/^[a-zA-Z0-9-]+$/, "Solo se permiten números, letras y guiones")
});

export const IndividualPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { status, errorMessage } = useSelector((state) => state.verificacion);
	const [ error, setError ] = useState();
	useEffect(() => {
		setError(errorMessage);
		console.log("imprimimos el store",status)
	  }, [errorMessage]);

	  const onSubmit = (values) => {
		console.log('valuessssss', values);
		if (values.folio.startsWith('ELEC')) {
		  dispatch(
			onGetValidarVoto(values.folio, () => {
			  navigate(`/verificacion/individual/${values.folio}/FoundFolio`);
			})
		  );
		} else if (values.folio.startsWith('CONSULTA')) {
		  console.log("ELECTORAL", values);
		  dispatch(
			onGetValidarVotoConsulta(values.folio, () => {
			  navigate(`/verificacion/individual/${values.folio}/ConsultaFound`);
			})
		  );
		} else if (values.folio.startsWith('NFML')) {
		  // Agregar acción para el código "NFML"
		  dispatch(
			onGetValidarVotoNFML(values.folio, () => {
			  navigate(`/verificacion/individual/${values.folio}/PopularesFound`);
			})
		  );
		} else {
		  dispatch(onError("No se encontró los resultados con ese folio. Por favor verifique el folio o intente con otro"));
		}
	  };
	  
	  
	// const onSubmit = (values) => {
	// 	console.log('valuessssss', values);
	// 	if (values.folio.startsWith('ELEC')) {
	// 	  dispatch(
	// 		onGetValidarVoto(values.folio, () => {
	// 		  navigate(`/verificacion/individual/${values.folio}/FoundFolio`);
	// 		})
	// 	  );
	// 	} else if (values.folio.startsWith('CONSULTA')) {
	// 	  console.log("ELECTORAL", values);
	// 	  dispatch(
	// 		onGetValidarVotoConsulta(values.folio, () => {
	// 		  navigate(`/verificacion/individual/${values.folio}/ConsultaFound`);
	// 		})
	// 	  );
	// 	} else {
	// 		dispatch(onError("No se encontró los resultados con ese folio. Por favor verifique el folio o intente con otro")); // Agregar dispatch de error en caso de texto no reconocido
  	// 	}
	//   };
	  
	  
	// console.log(error);
	const onCancel = () => {
	  navigate("/verificacion");
	//   dispatch(onError());
	};
  
	
	return (
		<Box pt="1.5rem">
			<Container
				maxWidth="md"
				sx={{
					boxShadow: 1,
					backgroundColor: "white",
					borderRadius: { xs: "1rem", md: "2rem" },
					p: "4rem",
					pl: "2rem",
				}}
			>
				<Box sx={{ width: "100%" }}>
					<Typography
						color="initial"
						mb="1rem"
						align="center"
						sx={{
							fontSize: {
								xs: "1.5rem",
								sm: "1.3rem",
								md: "1.3rem",
								lg: "2rem",
								xl: "2rem",
							},
						}}
					>
						INGRESE EL FOLIO DE SU BOLETA ELECTRÓNICA
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
						}}>Ingrese en el cuadro de texto su folio para poder buscarlo, por favor.</Typography>
            {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"} */}
          </React.Fragment>
        }
      >
		<HelpIcon color="primary" sx={{ ml: "1rem"}}/>
      </HtmlTooltip>
					</Typography>



                    <Formik
						initialValues={{
							folio: "",
						}}
						validationSchema={validationSchema}
						onSubmit={(values, {resetForm}) => {
							onSubmit(values);
							resetForm();
						}}
					>
						{({ values, handleSubmit, errors, touched, handleChange }) => (
							<Form onSubmit={handleSubmit}>

								<TextField
									name="folio"
									value={values.folio}
									onChange={handleChange}
									fullWidth
									focused
									placeholder="Ejemplo: ELECTORAL-000..."
									variant="outlined"
									label="Ingresa tu folio a verificar..."
									type="text"
									error={touched.folio && Boolean(errors.folio) ? errors.folio : error}
									// helperText={touched.folio && errors.folio}
									helperText={touched.folio && errors.folio ? errors.folio : error}
								></TextField>
										{/* {error && (
										<Box ml={2} mt={1} sx={{ fontSize: "12px", color: "#791010" }}>
											{error}
										</Box>
										)} */}
								<Box 
									sx={{ display: 'flex', 
										flexDirection: {
												xs: "column",
												sm: "row",
												md: "row",
												lg: "row",
												xl: "row",
											}, 
										pt: 2 }}
									>
								<Button
									onClick={onCancel}
									disabled={status === "checking"}
									startIcon={<ReplyIcon size="large" fontSize="inherit"/>}
									color="inherit"
									sx={{ mr: 1,
										fontSize: {
											xl: "1rem",
											lg: "1rem",
											sm: "1rem",
											xs: "1rem",
										}, }}
									>
									Regresar
								</Button>
								<Box sx={{ flex: '1 1 auto' }} 
									marginBottom={{xs: "1rem"}}/>
									<Button 
									disabled={status === "checking"}
									// startIcon={
									// 	status === "checking" ? (
									// 		<CircularProgress color="base" />
									// 	) : (
									// 		""
									// 	)
									// }
									type="submit"
									endIcon={<SendIcon size="large" fontSize="inherit"/>}
									sx={{
										backgroundColor: "#511079",
										borderRadius: "10px 10px 10px 10px",
										color: "#fff",
										fontSize: {
											xl: "1rem",
											lg: "1rem",
											sm: "1rem",
											xs: "1rem",
										},
										textAlign: "center",
										width: {
											xs: "100%",
											sm: "70%",
											md: "50%",
											lg: "40%",
											xl: "40%",
										},
										"&:hover": {
											background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
											color: "#FFFFFF",
											boxShadow: "9px 10px 4px rgba(0, 0, 0, 0.37)",
											transform: "translate(-3px, -3px)",
											transition: "all 0.5s ease",
										},
									}}>
										{status === "checking" && <CircularProgress color="base" />}
									verificar folio
									</Button>
								</Box>
							</Form>
						)}
					</Formik>
				</Box>
			</Container>
		</Box>
	);
};
