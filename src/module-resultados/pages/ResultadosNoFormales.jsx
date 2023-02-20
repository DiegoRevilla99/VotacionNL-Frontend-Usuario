import React, { useEffect, useRef, useState } from "react";
import { ResultadosComiteNF } from "./ResultadosComiteNF";
import { ResultadosPlanillaNF } from "./ResultadosPlanillaNF";
import { ResultadosRepNF } from "./ResultadosRepNF";

export const ResultadosNoFormales = ({ tipo = "planilla" }) => {
  return (
    <>
      {tipo === "representante" ? (
        <ResultadosRepNF />
      ) : tipo === "comite" ? (
        <ResultadosComiteNF />
      ) : (
        <ResultadosPlanillaNF />
      )}
    </>
  );
};
