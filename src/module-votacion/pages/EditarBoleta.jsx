import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, IconButton, LinearProgress, TextField } from "@mui/material";
import { TarjetaRepresentante } from "../components/TarjetaRepresentante";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { TarjetaCandidaturaNoRegistrada } from "../components/TarjetaCandidaturaNoRegistrada";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onGetBoletasDeVotante } from "../../store/votante/votanteThunks";
import {
	onAddCandidaturaNoRegistrada,
	onAddVoto,
	onSetBoletaActual,
} from "../../store/votante/votanteSlice";
import { VotoNulo } from "../components/VotoNulo";

export const EditarBoleta = () => {
	const { statusPeticion, boletaActual, votos, jornadaActual } = useSelector(
		(state) => state.votante
	);
	const params = useParams();
	// const [noBoleta, setNoBoleta] = useState(params.noBoleta + 1);
	const [candidaturaNoRegistrada, setCandidaturaNoRegistrada] = useState("");
	const [seleccionados, setSeleccionados] = useState([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	console.log("SELECCIONADOS", seleccionados);

	const handleSubmit = () => {
		if (seleccionados.includes(100)) {
			console.log("HACE EL REGISTRO DE LA CANDIDATURA");
			dispatch(
				onAddCandidaturaNoRegistrada({
					candidaturaNoRegistrada,
					noBoleta: parseInt(parseInt(params.noBoleta) + 1, 10),
				})
			);
		}
		dispatch(onAddVoto({ seleccionados, noBoleta: parseInt(params.noBoleta, 10) + 1 }));
		navigate("/votacion/votosRegistrados");
	};

	const handleChange = (event) => {
		setCandidaturaNoRegistrada(event.target.value);
	};

	useEffect(() => {
		console.log("VOTOOOOS", params.noBoleta);
		if (votos[params.noBoleta] !== undefined) {
			setSeleccionados(votos[params.noBoleta]);
		}
	}, []);

	if (statusPeticion === "checking") return <LinearProgress color="linearProgress" />;
	else
		return (
			<>
				<Box
					display={"flex"}
					sx={{
						height: "auto",
						flexGrow: 1,
						overflowY: { sx: "none", md: "auto" },
					}}
					mt="2rem"
					mb="2rem"
					zIndex={9998}
				>
					<Container maxWidth="md">
						<Box
							bgcolor="#423838"
							m={0}
							width="100%"
							height="auto"
							p={{ xs: "1rem", md: "2rem" }}
						>
							<Box bgcolor="base.main">
								<Box pb={1} display="flex" flexDirection="column" bgcolor="#423838">
									<Typography
										variant="h6"
										align="center"
										color="base.main"
										width="100%"
									>
										{/* PROCESO ELECTORAL ESTATAL 2022-2025 */}
										{boletaActual.encabezado}
									</Typography>
								</Box>
								<Box display="flex" justifyContent="center" mb="2rem">
									<Typography
										variant="h4"
										align="center"
										color="base.main"
										pl={{ xs: 2, md: 8 }}
										pr={{ xs: 2, md: 8 }}
										pb={1}
										sx={{ backgroundColor: "#423838" }}
									>
										{/* GOBERNADOR */}
										{boletaActual.modalidad === "REPRESENTANTE"
											? "REPRESENTANTE"
											: "COMITÉ"}
									</Typography>
								</Box>
								<Grid container spacing={3} pb="2rem">
									<Grid container item xs={12} md={7} display="flex">
										<Grid item xs={12} md={3}>
											<Typography
												variant="body1"
												color="initial"
												align="center"
											>
												Entidad Federativa
											</Typography>
										</Grid>
										<Grid item xs={12} md={9} px="1rem">
											<TextField
												fullWidth
												label="Entidad federativa"
												sx={{
													"& .MuiInputBase-input": {
														backgroundColor: "white !important",
													},
												}}
												defaultValue={boletaActual.entidad}
												disabled
											/>
										</Grid>
									</Grid>
									<Grid container item xs={12} md={5}>
										<Grid item xs={12} md={3} justifyContent="center">
											<Typography
												variant="body1"
												color="initial"
												align="center"
											>
												Distrito Electoral
											</Typography>
										</Grid>
										<Grid item xs={12} md={9} px="1rem">
											<TextField
												fullWidth
												label="Distrito Electoral"
												sx={{
													"& .MuiInputBase-input": {
														backgroundColor: "white !important",
													},
												}}
												defaultValue={boletaActual.distritoElectoral}
												disabled
											/>
										</Grid>
									</Grid>
									<Grid container item columns={21}>
										<Grid item xs={21} md={3} justifyContent="center">
											<Typography
												variant="body1"
												color="initial"
												align="center"
											>
												Municipio o Alcaldia
											</Typography>
										</Grid>
										<Grid item xs={21} md={18} px="1rem">
											<TextField
												fullWidth
												label="Municipio o Alcaldia"
												sx={{
													"& .MuiInputBase-input": {
														backgroundColor: "white !important",
													},
												}}
												defaultValue={boletaActual.municipio}
												disabled
											/>
										</Grid>
									</Grid>
								</Grid>

								<Grid
									container
									spacing={{ xs: 2, md: 3 }}
									pb="2rem"
									pl={"1rem"}
									pr={"1rem"}
								>
									{boletaActual.candidatos.map((representante, index) => {
										return (
											<Grid
												item
												xs={12}
												sm={6}
												display="flex"
												key={representante.id}
												justifyContent="center"
											>
												<TarjetaRepresentante
													id={representante.id}
													nombre={representante.nombre}
													nombrePartido={representante.nombrePartido}
													clavePartido={representante.clavePartido}
													nombreSuplente={representante.nombreSuplente}
													logo={representante.logo}
													seleccionados={seleccionados}
													setSeleccionados={setSeleccionados}
													max={boletaActual.maxOpciones}
													tipoJornada={jornadaActual.tipoJornada}
													tipoBoletaActual={boletaActual.modalidad}
													candidatos={representante.candidatos}
												/>
											</Grid>
										);
									})}

									{boletaActual.candidaturaNoRegistrada && (
										<Grid
											item
											xs={12}
											sm={6}
											display="flex"
											justifyContent="center"
										>
											<TarjetaCandidaturaNoRegistrada
												id={100}
												seleccionados={seleccionados}
												setSeleccionados={setSeleccionados}
												max={boletaActual.maxOpciones}
												handleChange={handleChange}
												candidaturaNoRegistrada={candidaturaNoRegistrada}
												setCandidaturaNoRegistrada={
													setCandidaturaNoRegistrada
												}
												noBoleta={parseInt(params.noBoleta, 10)}
											/>
										</Grid>
									)}

									{boletaActual.votoNulo && (
										<Grid
											item
											xs={12}
											sm={6}
											display="flex"
											justifyContent="center"
										>
											<VotoNulo
												id={200}
												seleccionados={seleccionados}
												setSeleccionados={setSeleccionados}
												max={boletaActual.maxOpciones}
												// noBoleta={noBoleta}
											/>
										</Grid>
									)}
								</Grid>
							</Box>
							<Box
								sx={{
									display: { xs: "flex", lg: "none" },
									flexDirection: "row",
									pt: 2,
								}}
							>
								<Box sx={{ flex: "1 1 auto" }} />

								{/* <Button
									color="base"
									onClick={handleSubmit}
									variant="contained"
									disabled={!(seleccionados.length >= boletaActual.minOpciones)}
								>
									Terminar
								</Button> */}
								{seleccionados.includes(200) ? (
									<Button color="base" onClick={handleSubmit} variant="contained">
										Terminar
									</Button>
								) : (
									<Button
										color="base"
										onClick={handleSubmit}
										variant="contained"
										disabled={
											!(seleccionados.length >= boletaActual.minOpciones) ||
											(seleccionados.includes(100) &&
												candidaturaNoRegistrada === "")
										}
									>
										Terminar
									</Button>
								)}
							</Box>
						</Box>
					</Container>
				</Box>
				<Box
					display={{ xs: "none", lg: "flex" }}
					width="100%"
					height="100%"
					// flexDirection="column"
					justifyContent="right"
					alignContent="center"
					alignItems="center"
					justifyItems="center"
					pr="5%"
					pt="4rem"
					position="absolute"
				>
					<Box sx={{ zIndex: 9999 }}>
						{seleccionados.length >= boletaActual.minOpciones && (
							<IconButton
								sx={{ display: "flex", flexDirection: "column" }}
								onClick={handleSubmit}
								color={
									seleccionados.includes(100) && candidaturaNoRegistrada === ""
										? "#f0f0f0"
										: "#388452"
								}
								disabled={
									!(seleccionados.length >= boletaActual.minOpciones) ||
									(seleccionados.includes(100) && candidaturaNoRegistrada === "")
								}
							>
								<>
									<CheckCircleOutlineOutlinedIcon
										sx={{
											// color: "#388452",
											height: {
												xs: "7rem",
												sm: "8rem",
												md: "8rem",
												lg: "8rem",
												xl: "8rem",
											},
											width: "auto",
										}}
									/>
									<Typography variant="body1" color="initial">
										Terminar
									</Typography>
								</>
							</IconButton>
						)}
					</Box>
				</Box>
			</>
		);
};
