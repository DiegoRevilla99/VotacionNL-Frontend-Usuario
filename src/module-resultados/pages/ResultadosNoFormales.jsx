import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getResultNoFormal } from "../../store/resultados-noformales/noformalesThunks";
import { ResultadosComiteNF } from "./ResultadosComiteNF";
import { ResultadosPlanillaNF } from "./ResultadosPlanillaNF";
import { ResultadosRepNF } from "./ResultadosRepNF";

export const ResultadosNoFormales = ({ tipo = "REPRESENTANTE" }) => {
  const { jornada, id } = useParams();
  const dispatch = useDispatch();
  const { resultados, isLoadingResultados, boleta } = useSelector(
    (state) => state.noformales
  );
  useEffect(() => {
    // dispatch(getResultNoFormal(jornada, id));
  }, []);
  return (
    <>
      {isLoadingResultados ? (
        <Typography>Cargando...</Typography>
      ) : tipo === "REPRESENTANTE" ? (
        <ResultadosRepNF />
      ) : tipo === "COMITE" ? (
        <ResultadosComiteNF />
      ) : (
        <ResultadosPlanillaNF />
      )}
    </>
  );
};
