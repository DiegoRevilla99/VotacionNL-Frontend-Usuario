import { Box } from "@mui/material";
import React from "react";
import { getCandidatos } from "../../helpers/FakeAPI";
import { CardCandidatos } from "./CardCandidatos";

export const GridCandFormales = ({ candidatos = [1, 2, 3] }) => {
  const candi = getCandidatos();
  return (
    <Box
      display={"flex"}
      alignItems="center"
      flexDirection={"column"}
      width={"100%"}
    >
      {candi.data.map((candi) => {
        return <CardCandidatos candidato={candi} />;
      })}
    </Box>
  );
};
