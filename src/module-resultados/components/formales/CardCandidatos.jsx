import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const card = {
  width: "300px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  overFlow: "hidden",
};

const header = {
  display: "flex",
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
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

export const CardCandidatos = () => {
  return (
    <Box sx={card}>
      <Box sx={header} className="header">
        <Box sx={userPhoto} className="header">
          <img
            width={"100%"}
            height={"100%"}
            style={{ borderRadius: "50%" }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            class="photo"
          />
        </Box>
        <Typography sx={{ m: 1 }}>Laura Yessenia Sanchez Lopez</Typography>
      </Box>
      <Box sx={{ padding: "20px" }} className="body">
        <Box sx={skill}>
          <Box sx={skillName}>Porcentaje</Box>
          <Box sx={skillLevel}>
            <Box sx={skillPercent} width={"90%"}></Box>
          </Box>
          <Box sx={{ marginLeft: "20px", fontSize: "16px" }}>90%</Box>
        </Box>

        <Box sx={skill}>
          <Box sx={skillName}>Total votos</Box>
          <Box sx={{ marginLeft: "20px", fontSize: "16px" }}>9000 votos</Box>
        </Box>

        <Divider></Divider>
        <Box sx={{ mt: 2, width: "100%" }}>
          <Typography
            mb={"10px"}
            sx={{ fontWeight: "bold" }}
            textAlign={"center"}
          >
            Patido(s)
          </Typography>
        </Box>
        <Box sx={skill}></Box>
      </Box>
    </Box>
  );
};
