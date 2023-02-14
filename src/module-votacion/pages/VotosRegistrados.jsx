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
	const { votos, boletas, jornadaFormal, jornadaActual, status, candidaturaNoRegistrada } =
		useSelector((state) => state.votante);
	const { username } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [coalicionInvalida, setCoalicionInvalida] = useState([]);
	console.log("STATUS COALICIONES", coalicionInvalida);

	const onSubmit = () => {
		setModalStatus(true);

		if (jornadaActual.tipoJornada === "JornadaFormal") {
			const votosObject = votos.map((boleta, indexBoleta) => {
				const boletaCurrent = boletas[indexBoleta];
				const partidos = boleta.map((idPartido) => {
					if (idPartido === 100)
						return {
							clavePartido: "CANORE",
							nombrePartido: "Candidatura no registrada",
							nombreCandidato: candidaturaNoRegistrada[indexBoleta],
						};
					else if (idPartido === 200)
						return {
							clavePartido: "NULO",
							nombrePartido: "Voto nulo",
							nombreCandidato: "Voto nulo",
						};
					else {
						const index = boletaCurrent.candidatos.findIndex((i) => i.id === idPartido);
						// return boletaCurrent.candidatos[index];
						return {
							idSeleccion: boletaCurrent.candidatos[index].id,
							claveCoalicion: boletaCurrent.candidatos[index].claveCoalicion,
							clavePartido: boletaCurrent.candidatos[index].clavePartido,
							nombrePartido: boletaCurrent.candidatos[index].nombrePartido,
							nombreCandidato: boletaCurrent.candidatos[index].nombre,
						};
					}
				});
				return {
					boletaModel: {
						nombreEleccion: boletaCurrent.encabezado,
						municipio: boletaCurrent.municipio,
						distrito: boletaCurrent.distritoElectoral,
						jornadaElectoral: boletaCurrent.jornadaElectoral,
						idEstructuraBoleta: boletaCurrent.idEstructuraBoleta,
					},
					partidos: partidos,
				};
			});

			console.log("votosObject", votosObject);

			const votosObjectCoaliciones = verificarCoaliciones(votosObject);
			console.log("VALIDACION COALICIONES", votosObjectCoaliciones);

			dispatch(
				onEmitirVoto(votosObject, jornadaActual.idJornada, username, () =>
					navigate("/votacion/folios")
				)
			);
		} else if (jornadaActual.tipoJornada === "JornadaNoFormal") {
			console.log("votos NO FORMAL", votos);
			console.log("boletas NO FORMAL", boletas);
		}
	};

	const verificarCoaliciones = (votos) => {
		const nuevos = [];
		votos.forEach((voto) => {
			const numero = voto.partidos[0].claveCoalicion;
			let nulo = voto.partidos.some((partido) => {
				return partido.claveCoalicion !== numero;
			});

			if (nulo) {
				nuevos.push({
					boletaModel: voto.boletaModel,
					partidos: {
						clavePartido: "NULO",
						nombreCandidato: "Voto nulo",
						nombrePartido: "Voto nulo",
					},
				});
			} else {
				nuevos.push({
					boletaModel: voto.boletaModel,
					partidos: voto.partidos,
				});
			}
		});
		return nuevos;
	};

	const verificarCoalicionesPreEnvio = (votos) => {
		console.log("LOS VOTOS QUE LLEGAN", votos);
		const nuevos = [];
		const array = [];
		votos.forEach((voto) => {
			console.log("voto foreach", voto);
			const numero = voto.partidos[0].claveCoalicion;
			console.log("Numero", numero);
			let nulo = voto.partidos.some((partido) => {
				return partido.claveCoalicion !== numero;
			});

			console.log("ES NULO?", nulo);

			if (nulo) {
				console.log("LO SETEA EN TRUE");
				array.push(true);
			} else {
				array.push(false);
			}
		});
		setCoalicionInvalida(array);
		return nuevos;
	};

	useEffect(() => {
		if (status === "noVotando") {
			navigate("/votacion/inicio");
		}
	}, []);

	useEffect(() => {
		const votosObject = votos.map((boleta, indexBoleta) => {
			const boletaCurrent = boletas[indexBoleta];
			const partidos = boleta.map((idPartido) => {
				if (idPartido === 100)
					return {
						clavePartido: "CANORE",
						nombrePartido: "Candidatura no registrada",
						nombreCandidato: candidaturaNoRegistrada[indexBoleta],
					};
				else if (idPartido === 200)
					return {
						clavePartido: "NULO",
						nombrePartido: "Voto nulo",
						nombreCandidato: "Voto nulo",
					};
				else {
					const index = boletaCurrent.candidatos.findIndex((i) => i.id === idPartido);
					// return boletaCurrent.candidatos[index];
					return {
						idSeleccion: boletaCurrent.candidatos[index].id,
						claveCoalicion: boletaCurrent.candidatos[index].claveCoalicion,
						clavePartido: boletaCurrent.candidatos[index].clavePartido,
						nombrePartido: boletaCurrent.candidatos[index].nombrePartido,
						nombreCandidato: boletaCurrent.candidatos[index].nombre,
					};
				}
			});
			return {
				boletaModel: {
					nombreEleccion: boletaCurrent.encabezado,
					municipio: boletaCurrent.municipio,
					distrito: boletaCurrent.distritoElectoral,
					jornadaElectoral: boletaCurrent.jornadaElectoral,
					idEstructuraBoleta: boletaCurrent.idEstructuraBoleta,
					// jornadaElectoral: boletaCurrent.jornadaElectoral,
				},
				partidos: partidos,
			};
		});

		console.log("votosObject", votosObject);

		const votosObjectCoaliciones = verificarCoalicionesPreEnvio(votosObject);
		console.log("VALIDACION COALICIONES", votosObjectCoaliciones);
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
												coalicionInvalida={coalicionInvalida[index]}
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
