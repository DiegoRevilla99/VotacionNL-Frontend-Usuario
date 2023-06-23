import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { CardRespuesta } from "./CardRespuesta";

export const GridConsultas2 = ({ datos }) => {
  const { respuestas, resultados, total } = datos;
  useEffect(() => {
    console.log("repuestas: ", respuestas);
    console.log("resultados: ", resultados);
    console.log("total: ", total);
  }, []);

  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent="center"
      flexDirection={"column"}
      width={"99%"}
    >
      {datos.respuestas.map((item, index) => (
        <CardRespuesta
          total={datos.total}
          res={datos.respuestas[index]}
          cant={datos.resultados[index]}
        />
      ))}
    </Box>
  );
};
