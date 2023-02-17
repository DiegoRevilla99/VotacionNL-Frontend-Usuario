import { Box, IconButton, Typography } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import React, { useState } from "react";
import { onSetBoletaActual } from "../../store/votante/votanteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const VotoRegistrado = ({ voto, boleta, noBoleta, coalicionInvalida, modalidadBoleta }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { candidaturaNoRegistrada } = useSelector((state) => state.votante);
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
							{voto.map((seleccionado, index, row) => {
								if (coalicionInvalida) {
									return (
										<>
											{boleta.candidatos.map((candidato, index) => {
												if (candidato.id === seleccionado) {
													console.log("ENCUENTRA CANDIDATO ");
													return (
														<React.Fragment key={candidato.id + index}>
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
																	fontSize: {
																		xs: 12,
																		md: 16,
																	},
																}}
																color="initial"
																gutterBottom
																key={
																	boleta.encabezado +
																	seleccionado +
																	index
																}
																pb={1}
															>
																{candidato.nombre}
															</Typography>
														</React.Fragment>
													);
												}
											})}
											{index + 1 === row.length && (
												<Typography
													sx={{
														fontSize: { xs: 12, md: 16 },
													}}
													color="error"
													gutterBottom
													key={
														boleta.encabezado +
														seleccionado +
														"Invalida" +
														index
													}
												>
													Voto nulo (Por coalición invalida)
												</Typography>
											)}
										</>
									);
								} else if (seleccionado === 100 && !coalicionInvalida) {
									return (
										<>
											<Typography
												sx={{
													fontSize: {
														xs: 7,
														md: 11,
													},
													userSelect: "none",
												}}
												color="text.secondary"
												gutterBottom
												align="center"
												pt={1}
											>
												CANDIDATURA NO REGISTRADA
											</Typography>
											<Typography
												sx={{
													fontSize: { xs: 12, md: 16 },
												}}
												color="initial"
												gutterBottom
												key={boleta.encabezado + seleccionado + index}
											>
												{candidaturaNoRegistrada[noBoleta]}
											</Typography>
										</>
									);
								} else if (seleccionado === 200 && !coalicionInvalida) {
									return (
										<>
											<Typography
												sx={{
													fontSize: {
														xs: 7,
														md: 11,
													},
													userSelect: "none",
												}}
												color="text.secondary"
												gutterBottom
												align="center"
												pt={1}
											>
												VOTO NULO
											</Typography>
											<Typography
												sx={{
													fontSize: { xs: 12, md: 16 },
												}}
												color="initial"
												gutterBottom
												key={boleta.encabezado + seleccionado + index}
											>
												Voto nulo
											</Typography>
										</>
									);
								} else if (!coalicionInvalida) {
									if (modalidadBoleta === "PLANILLA") {
										return (
											<>
												{boleta.candidatos.map((candidato, index) => {
													if (candidato.id === seleccionado) {
														return (
															<React.Fragment
																key={candidato.id + index}
															>
																<Typography
																	sx={{
																		fontSize: {
																			xs: 7,
																			md: 11,
																		},
																		userSelect: "none",
																	}}
																	color="text.secondary"
																	gutterBottom
																	align="center"
																	pt={1}
																>
																	{candidato.nombrePartido}
																</Typography>
																{candidato.candidatos.map(
																	(cand, index2) => {
																		return (
																			<Typography
																				sx={{
																					fontSize: {
																						xs: 12,
																						md: 16,
																					},
																				}}
																				color="initial"
																				gutterBottom
																				key={
																					cand.id +
																					seleccionado +
																					index2
																				}
																			>
																				{cand.nombre}
																			</Typography>
																		);
																	}
																)}{" "}
															</React.Fragment>
														);
													}
												})}
											</>
										);
									} else
										return (
											<>
												{boleta.candidatos.map((candidato, index) => {
													if (candidato.id === seleccionado)
														return (
															<React.Fragment
																key={candidato.id + index}
															>
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
																		fontSize: {
																			xs: 12,
																			md: 16,
																		},
																	}}
																	color="initial"
																	gutterBottom
																	key={
																		boleta.encabezado +
																		seleccionado +
																		index
																	}
																	pb={1}
																>
																	{candidato.nombre}
																</Typography>
															</React.Fragment>
														);
												})}
											</>
										);
								}
							})}
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
