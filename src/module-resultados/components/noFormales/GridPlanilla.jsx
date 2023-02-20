import { Box } from "@mui/material";
import React from "react";
import { CardCandidatos } from "./CardCandidatos";
import { CardPlanilla } from "./CardPlanilla";

export const GridPlanilla = ({ candidatos = [1, 2, 3] }) => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      flexDirection={"column"}
      width={"100%"}
    >
      {candidatos.map((candi) => {
        return <CardPlanilla candidato={candi} />;
      })}
    </Box>
  );
};
