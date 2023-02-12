import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button, Container, Grid, IconButton, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { ModalEmitirVotos } from "../components/ModalEmitirVotos";
import { useDispatch, useSelector } from "react-redux";
import { onEmitirVoto } from "../../store/votante/votanteThunks";
import { VotoRegistrado } from "../components/VotoRegistrado";

export const VotosRegistrados = () => {
	const [modalStatus, setModalStatus] = useState(false);
	const { votos, boletas, jornadaFormal, jornadaActual, status } = useSelector(
		(state) => state.votante
	);
	const { username } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = () => {
		setModalStatus(true);
		console.log("votos", votos);
		console.log("boletas", boletas);

		const votosObject = votos.map((boleta, indexBoleta) => {
			const boletaCurrent = boletas[indexBoleta];
			const partidos = boleta.map((idPartido) => {
				const index = boletaCurrent.candidatos.findIndex((i) => i.id === idPartido);
				// return boletaCurrent.candidatos[index];
				return {
					idSeleccion: boletaCurrent.candidatos[index].id,
					clavePartido: boletaCurrent.candidatos[index].clavePartido,
					nombrePartido: boletaCurrent.candidatos[index].nombrePartido,
					nombreCandidato: boletaCurrent.candidatos[index].nombre,
				};
			});
			return {
				boletaModel: {
					nombreEleccion: boletaCurrent.encabezado,
					municipio: boletaCurrent.municipio,
					distrito: boletaCurrent.distritoElectoral,
					jornadaElectoral: boletaCurrent.jornadaElectoral,
				},
				partidos: partidos,
			};
		});

		console.log("votosObject", votosObject);

		dispatch(
			onEmitirVoto(votosObject, jornadaActual.idJornada, username, () =>
				navigate("/votacion/folios")
			)
		);
	};

	useEffect(() => {
		if (status === "noVotando") {
			navigate("/votacion/inicio");
		}
	}, []);

	return (
		<Box
			display="flex"
			height="100%"
			// alignItems="center"
			sx={{
				// height: "auto",
				flexGrow: 1,
				overflowY: { sx: "none", md: "auto" },
			}}
			pt="2rem"
			pb="2rem"
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						minHeight: "10rem",
						height: { xs: "auto", md: "100%" },
						boxShadow: 1,
						backgroundColor: "base.main",
						borderRadius: { xs: "0.5rem", md: "1rem" },
						p: { xs: "1rem", md: "2rem" },
						// overflowY: { xs: "unset", md: "hidden" },
					}}
				>
					<Box
						sx={{
							height: "100%",
							// overflowY: { xs: "unset", md: "hidden" },
						}}
						pb="3rem"
					>
						<Typography
							variant="h4"
							color="#323232"
							display="flex"
							justifyContent="center"
							mb="2rem"
						>
							Votos registrados
						</Typography>
						<Grid container spacing={3} height="100%">
							<Grid
								item
								xs={12}
								md={6}
								height="100%"
								sx={{ overflowY: "auto" }}
								display="flex"
								flexDirection="column"
								justifyContent="center"
							>
								<Box pt="3rem">
									{boletas.map((boleta, index) => {
										return (
											<VotoRegistrado
												voto={votos[index]}
												boleta={boleta}
												noBoleta={index}
												key={boleta.encabezado}
											/>
										);
									})}
								</Box>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}
								display="flex"
								flexDirection="column"
								justifyContent="center"
								alignContent="center"
								alignItems="center"
							>
								<Box width="50%">
									<Button
										variant="contained"
										size="large"
										color="darkButton"
										onClick={onSubmit}
										sx={{
											boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)",
											transition: "all 0.5s ease",
											// backgroundColor: "#543884",
											width: "100%",
											// borderRadius: "2rem 2rem 2rem 2rem",
											"&:hover": {
												// backgroundColor: "#7E328B !important",
												transform: "translate(-5px, -5px)",
												boxShadow: "5px 5px 1px rgba(0, 0, 0, 0.3)",
											},
										}}
									>
										Emitir votos
									</Button>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
			<ModalEmitirVotos modalStatus={modalStatus} />
		</Box>
	);
};
