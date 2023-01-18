import { Box, Button, CardActions , CardActionArea, Stepper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import ReplyIcon from '@mui/icons-material/Reply';

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData('JE22-ORD-GHR42S', 'JUAN', 'JE22-ORD-GHR47S', 'PEDRO'),
    createData('JE22-ORD-GHR41S', 'PEDRO', 'JE22-ORD-GHR48S', 'PERENGANO'),
    createData('JE22-ORD-GHR43S', 'PERENGANO', 'JE22-ORD-GHR49S', 'PEDRO'),
    createData('JE22-ORD-GHR44S', 'PEDRO', 'JE22-ORD-GHR11S', 'PERENGANO'),
    createData('JE22-ORD-GHR46S', 'JUAN', 'JE22-ORD-GHR22S', 'PERENGANO'),
  ];




export const GroupPage = () => {
	const navigate = useNavigate();
	const onCancel = () => {
		navigate("/verificacion/visualizacion/boleta");
	};
	return (
		<Box pt="3rem">
			<Container
				maxWidth="lg"
				sx={{
					boxShadow: 1,
					backgroundColor: "white",
					borderRadius: { xs: "1rem", md: "2rem" },
					p: "2rem",
					pl: "2rem",
				}}
			>
				<Box sx={{ width: "100%" }}>
					<Typography
						color="initial"
						mb="1rem"
						align="center"
						sx={{
							fontSize: {
                                xl: "1.1rem",
                                lg: "1.1rem",
                                sm: "1.1rem",
                                xs: "1.1rem",
							},
						}}
					>
						JORNADAS FORMALES QUE SE ESTÉN LLEVANDO A CABO, SE PRESENTAN LOS SIGUIENTES FOLIOS Y SUS SENTIDOS
					</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>FOLIO</TableCell>
                  <TableCell>SENTIDO</TableCell>
                  <TableCell>FOLIO</TableCell>
                  <TableCell>SENTIDO</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell >{row.calories}</TableCell>
                    <TableCell >{row.fat}</TableCell>
                    <TableCell >{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box pt="2rem"
                                align="right">
									<Button 
									onClick={onCancel}
									startIcon={<ReplyIcon />}
									sx={{
										backgroundColor: "#511079",
										// borderRadius: "15px 15px 15px 15px",
										color: "#fff",
										fontSize: {
											xl: "0.9rem",
											lg: "0.9rem",
											sm: "0.9rem",
											xs: "0.9Srem",
										},
										textAlign: "center",
										width: "13rem",
										height: "2.8rem",
										"&:hover": {
											background: "linear-gradient(45deg, #7E328B 30%, #7E328B 90%)",
											color: "#FFFFFF",
											boxShadow: "9px 10px 4px rgba(0, 0, 0, 0.37)",
											transform: "translate(-2px, -2px)",
											transition: "all 0.5s ease",
										},
									}}>
									Regresar
									</Button>
              </Box>
				</Box>
			</Container>
		</Box>
	);
};
