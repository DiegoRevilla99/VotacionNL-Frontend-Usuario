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



function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData('JE22-ORD-GHR42S', 'JUAN', 'JE22-ORD-GHR42S', 'PEDRO'),
    createData('JE22-ORD-GHR42S', 'PEDRO', 'JE22-ORD-GHR42S', 'PERENGANO'),
    createData('JE22-ORD-GHR42S', 'PERENGANO', 'JE22-ORD-GHR42S', 'PEDRO'),
    createData('JE22-ORD-GHR42S', 'PEDRO', 'JE22-ORD-GHR42S', 'PERENGANO'),
    createData('JE22-ORD-GHR42S', 'JUAN', 'JE22-ORD-GHR42S', 'PERENGANO'),
  ];




export const GroupPage = () => {

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
						CONSULTAS, JORNADAS FORMALES Y NO FORMALES QUE SE ESTÉN LLEVANDO A CABO
, SE PRESENTAN LAS SIGUIENTES BOLETAS Y SUS SENTIDOS
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
				</Box>
			</Container>
		</Box>
	);
};
