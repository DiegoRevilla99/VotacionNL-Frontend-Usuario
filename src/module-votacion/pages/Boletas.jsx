import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Divider, Grid, IconButton, LinearProgress, Modal, TextField } from "@mui/material";
import { TarjetaRepresentante } from "../components/TarjetaRepresentante";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { TarjetaCandidaturaNoRegistrada } from "../components/TarjetaCandidaturaNoRegistrada";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onGetBoletasDeVotante } from "../../store/votante/votanteThunks";
import {
	onAddCandidaturaNoRegistrada,
	onAddVoto,
	onSetBoletaActual,
} from "../../store/votante/votanteSlice";
import { VotoNulo } from "../components/VotoNulo";
// import ReactRouterPrompt from "react-router-prompt";

export const Boletas = () => {
	const {
		statusPeticion,
		boletas,
		boletaActual,
		votos,
		candidaturaNoRegistrada: previo,
		status,
		jornadaActual,
	} = useSelector((state) => state.votante);
	const [noBoleta, setNoBoleta] = useState(1);
	const [seleccionados, setSeleccionados] = useState([]);
	const [candidaturaNoRegistrada, setCandidaturaNoRegistrada] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	console.log("ME RENDERIZO BOLETA");

	const handleChange = (event) => {
		setCandidaturaNoRegistrada(event.target.value);
	};

	const handleSubmit = () => {
		if (seleccionados.includes(100)) {
			dispatch(onAddCandidaturaNoRegistrada({ candidaturaNoRegistrada, noBoleta }));
		}
		setCandidaturaNoRegistrada("");
		dispatch(onAddVoto({ seleccionados, noBoleta }));
		if (noBoleta === boletas.length) navigate("/votacion/votosRegistrados");
		else {
			setSeleccionados([]);
			setNoBoleta((n) => n + 1);
		}
	};
	const handleBack = () => {
		setNoBoleta((n) => n - 1);
	};

	useEffect(() => {
		if (status === "noVotando") {
			navigate("/votacion/inicio");
		}
	}, []);

	useEffect(() => {
		if (votos[noBoleta - 1] !== undefined) {
			setSeleccionados(votos[noBoleta - 1]);
		}
		if (previo[noBoleta - 1] !== undefined && previo[noBoleta - 1] !== null) {
			setCandidaturaNoRegistrada(previo[noBoleta - 1]);
		}
	}, [noBoleta]);

	useEffect(() => {
		if (boletas.length !== 0) dispatch(onSetBoletaActual(noBoleta));
	}, [boletas, noBoleta]);

	if (statusPeticion === "checking") return <LinearProgress color="linearProgress" />;
	else
		return (
			<>
				{/* <ReactRouterPrompt when={true}>
					{({ isActive, onConfirm, onCancel }) => (
						<Modal show={isActive}>
							<div>
								<p>Do you really want to leave?</p>
								<button onClick={onCancel}>Cancel</button>
								<button onClick={onConfirm}>Ok</button>
							</div>
						</Modal>
					)}
				</ReactRouterPrompt> */}
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
										pb={1}
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
										{jornadaActual.tipoJornada !== "JornadaNoFormal"
											? ""
											: boletaActual.modalidad === "REPRESENTANTE"
											? "REPRESENTANTE"
											: boletaActual.modalidad === "COMITE"
											? "COMITÉ"
											: "PLANILLA"}
									</Typography>
								</Box>
								{jornadaActual.tipoJornada === "JornadaNoFormal" ? (
									<></>
								) : (
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
													value={boletaActual.entidad}
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
													value={boletaActual.distritoElectoral}
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
													value={boletaActual.municipio}
													disabled
												/>
											</Grid>
										</Grid>
									</Grid>
								)}

								{jornadaActual.tipoJornada === "JornadaNoFormal" && (
									<Box>
										<Box display="flex" justifyContent="center" pb="1rem">
											<Typography
												variant="body1"
												color="initial"
												align="center"
											>
												{boletaActual.modalidad === "COMITE"
													? `Seleccione ${boletaActual.maxOpciones} opciones`
													: boletaActual.modalidad === "REPRESENTANTE"
													? "Seleccione una opción"
													: "Seleccione las planillas por las que desea votar"}
											</Typography>
										</Box>
										<Divider />
									</Box>
								)}

								<Grid
									container
									spacing={{ xs: 2, md: 3 }}
									pt="1rem"
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
												noBoleta={noBoleta}
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
												noBoleta={noBoleta}
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
								{noBoleta !== 1 && (
									<Button color="base" onClick={handleBack} variant="outlined">
										Regresar
									</Button>
								)}

								<Box sx={{ flex: "1 1 auto" }} />

								{seleccionados.includes(200) ? (
									<Button color="base" onClick={handleSubmit} variant="contained">
										{noBoleta === boletas.length ? "Terminar" : "Siguiente"}
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
										{noBoleta === boletas.length ? "Terminar" : "Siguiente"}
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
						{seleccionados.length >= boletaActual.minOpciones &&
							!seleccionados.includes(200) && (
								<IconButton
									sx={{ display: "flex", flexDirection: "column" }}
									onClick={handleSubmit}
									disabled={
										!(seleccionados.length >= boletaActual.minOpciones) ||
										(seleccionados.includes(100) &&
											candidaturaNoRegistrada === "")
									}
								>
									{noBoleta === boletas.length ? (
										<>
											<CheckCircleOutlineOutlinedIcon
												sx={{
													color: "#388452",
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
									) : (
										<>
											<ArrowCircleRightOutlinedIcon
												sx={{
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
												Siguiente
											</Typography>
										</>
									)}
								</IconButton>
							)}

						{seleccionados.includes(200) && (
							<IconButton
								sx={{ display: "flex", flexDirection: "column" }}
								onClick={handleSubmit}
							>
								{noBoleta === boletas.length ? (
									<>
										<CheckCircleOutlineOutlinedIcon
											sx={{
												color: "#388452",
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
								) : (
									<>
										<ArrowCircleRightOutlinedIcon
											sx={{
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
											Siguiente
										</Typography>
									</>
								)}
							</IconButton>
						)}
					</Box>
				</Box>
				{noBoleta !== 1 && (
					<Box
						display={{ xs: "none", lg: "flex" }}
						width="100%"
						height="100%"
						// flexDirection="column"
						justifyContent="left"
						alignContent="center"
						alignItems="center"
						justifyItems="center"
						pl="5%"
						pt="4rem"
						position="absolute"
					>
						<Box sx={{ zIndex: 9999 }}>
							<IconButton
								sx={{ display: "flex", flexDirection: "column" }}
								onClick={handleBack}
							>
								<ArrowCircleLeftOutlinedIcon
									sx={{
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
									Regresar
								</Typography>
							</IconButton>
						</Box>
					</Box>
				)}
			</>
		);
};
