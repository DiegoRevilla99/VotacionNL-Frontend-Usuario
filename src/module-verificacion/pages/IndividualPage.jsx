import { Box, Button, CardActions , CardActionArea, Stepper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import { object, string } from "yup";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import shadows from "@mui/material/styles/shadows";

const validationSchema = object({
	// folio: string("").required("Este campo es requerido"),
});

export const IndividualPage = () => {

	return (
		<Box pt="3rem">
			<Container
				maxWidth="lg"
				sx={{
					boxShadow: 1,
					backgroundColor: "white",
					borderRadius: { xs: "1rem", md: "2rem" },
					p: "2rem",
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
						INGRESE EL FOLIO DE SU BOLETA
					</Typography>
                    <Formik
						initialValues={{
							folio: "",
						}}
						validationSchema={validationSchema}
						onSubmit={(values) => {
							// console.log(values);
							handleSubmit(values);
						}}
					>
						{({ values, handleSubmit, errors, touched, handleChange }) => (
							<form onSubmit={handleSubmit}>

								<TextField
									name="folio"
									value={values.folio}
									onChange={handleChange}
									fullWidth
									focused
									variant="outlined"
									label="Ingresa el folio"
									type="text"
									error={touched.folio && Boolean(errors.folio)}
									helperText={touched.folio && errors.folio}
								></TextField>
                                <Box pt="2rem"
                                align="center">
                                <Button 
                                // size="small" color="primary"
                                type="submit"
                                sx={{
									backgroundColor: "#511079",
									borderRadius: "25px 25px 25px 25px",
                                    // borderColor: "#7E328B",
									color: "#fff",
									fontSize: {
										xl: "1.1rem",
										lg: "1.1rem",
										sm: "1.1rem",
										xs: "1.1rem",
									},
									textAlign: "center",
									// width: { xl: 340, lg: 240, sm: "80%", xs: "80%" },
                                    width: "25rem",
                                    height: "3.5rem",
									// height: { xl: 370, lg: 270, sm: "80%", xs: "80%" },
									"&:hover": {
										background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
                                        color: "#FFFFFF",
										boxShadow: "9px 10px 4px rgba(0, 0, 0, 0.37)",
										transform: "translate(-3px, -3px)",
										transition: "all 0.5s ease",
									},
								}}>
                                Solicita tu verificación
                                </Button>
                                </Box>
							</form>
						)}
					</Formik>
				</Box>
			</Container>
		</Box>
	);
};
