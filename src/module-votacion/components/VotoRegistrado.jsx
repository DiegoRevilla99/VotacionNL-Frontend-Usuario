import { Box, IconButton, Typography } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import React, { useState } from "react";
import { onSetBoletaActual } from "../../store/votante/votanteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const VotoRegistrado = ({ voto, boleta, noBoleta, coalicionInvalida }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { candidaturaNoRegistrada } = useSelector((state) => state.votante);
	const [hayCoalicionInvalida, setHayCoalicionInvalida] = useState(false);
	const handleEdit = () => {
		dispatch(onSetBoletaActual(noBoleta + 1));
		navigate("/votacion/editarBoleta/" + noBoleta);
	};

	return (
		<Box
			width="100%"
			// height="auto"
			borderRadius="1rem"
			bgcolor="#323232"
			mb="2rem"
		>
			<Box p="1rem" width="100%" display="flex" flexDirection="column">
				<Box width="100%" display="flex" pl={{ xs: "0.5rem", md: "1rem" }}>
					<Box display="flex" flexDirection="column" flexGrow={3}>
						<Typography variant="h6" color="base.main" width="100%" align="center">
							{boleta.encabezado}
						</Typography>
						<Box
							bgcolor="base.main"
							borderRadius="1rem"
							p="1rem"
							align="center"
							sx={{
								width: "100%",
								wordBreak: "break-word",
							}}
						>
							{voto.map((seleccionado, index) => {
								if (coalicionInvalida && index === 0) {
									return (
										<Typography
											sx={{
												fontSize: { xs: 12, md: 16 },
											}}
											color="initial"
											gutterBottom
											key={boleta.encabezado + seleccionado}
										>
											Voto nulo (Por coalición invalida)
										</Typography>
									);
								} else if (seleccionado === 100 && !coalicionInvalida) {
									return (
										<Typography
											sx={{
												fontSize: { xs: 12, md: 16 },
											}}
											color="initial"
											gutterBottom
											key={boleta.encabezado + seleccionado}
										>
											{candidaturaNoRegistrada[noBoleta]}
										</Typography>
									);
								} else if (seleccionado === 200 && !coalicionInvalida) {
									return (
										<Typography
											sx={{
												fontSize: { xs: 12, md: 16 },
											}}
											color="initial"
											gutterBottom
											key={boleta.encabezado + seleccionado}
										>
											Voto nulo
										</Typography>
									);
								} else if (!coalicionInvalida)
									return (
										<>
											{boleta.candidatos.map((candidato) => {
												if (candidato.id === seleccionado)
													return (
														<>
															<Typography
																sx={{
																	fontSize: { xs: 7, md: 11 },
																	userSelect: "none",
																}}
																color="text.secondary"
																gutterBottom
																align="center"
															>
																{candidato.nombrePartido}
															</Typography>
															<Typography
																sx={{
																	fontSize: { xs: 12, md: 16 },
																}}
																color="initial"
																gutterBottom
																key={
																	boleta.encabezado + seleccionado
																}
																pb={1}
															>
																{candidato.nombre}
															</Typography>
														</>
													);
											})}
										</>
									);
							})}
							{/* <Typography
								sx={{
									fontSize: { xs: 12, md: 18 },
								}}
								color="initial"
								gutterBottom
								// position={"relative"}
							>
								Pedro Ulises Sanchez Pérez
							</Typography> */}
						</Box>
					</Box>
					<Box
						display="flex"
						flexGrow={1}
						// px="1rem"
						pl="1rem"
						justifyContent="center"
						alignContent="center"
						alignItems="center"
					>
						<Box>
							<IconButton
								onClick={handleEdit}
								sx={{
									backgroundColor: "base.main",
									":hover": {
										backgroundColor: "base.main",
									},
								}}
							>
								<ModeEditOutlineOutlinedIcon />
							</IconButton>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
