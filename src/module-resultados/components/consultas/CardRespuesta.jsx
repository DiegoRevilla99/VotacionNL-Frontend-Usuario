import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";

const card = {
  width: "90%",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
  borderRadius: "20px",
  overFlow: "hidden",
  mb: 5,
};

const header = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  backgroundColor: "#333",
  width: "100%",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
  borderRadius: "5px",
  fontSize: "18px",
};

const skill = {
  display: "flex",
  alignItems: "center",
  marginBottom: " 20px",
};

const skillName = {
  width: "120px",
  fontSize: "16px",
};

const skillLevel = {
  width: "160px",
  height: "10px",
  backgroundColor: "#eee",
  borderRadius: "10px",
  overFlow: "hidden",
  marginLeft: "20px",
};

const skillPercent = {
  backgroundColor: "#333",
  height: "100%",
};
const userPhoto = {
  width: "4.5rem",
  overFlow: "hidden",
  padding: 0,
  borderRadius: "50%",
  border: "1px solid rgb(231, 227, 227)",
  boxShadow: "2px 2px 10px lightslategray",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const CardRespuesta = ({ res = "", cant = 0, total = 0 }) => {
  const [porncentaje, setPorncentaje] = useState((100 * cant) / total);
  return (
    <Box sx={card}>
      <Box sx={header} className="header">
        <Typography sx={{ m: 1 }}>Respuesta: {res}</Typography>
      </Box>
      <Box sx={{ padding: "20px" }} className="body">
        <Box sx={skill}>
          <Box sx={skillName}>Porcentaje</Box>
          <Box sx={skillLevel}>
            <Box sx={skillPercent} width={porncentaje + "%"}></Box>
          </Box>
          <Box sx={{ marginLeft: "20px", fontSize: "16px" }}>
            {total == 0 ? 0 : porncentaje.toFixed(2)}%
          </Box>
        </Box>

        <Box sx={skill}>
          <Box sx={skillName}>Total votos</Box>
          <Box sx={{ marginLeft: "20px", fontSize: "16px" }}>{cant} votos</Box>
        </Box>

        <Box sx={skill}></Box>
      </Box>
    </Box>
  );
};
