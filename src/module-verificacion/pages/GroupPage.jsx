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


// ----------- Bradcrumbs ----------
// import { experimentalStyled as styled } from '@mui/material/styles';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import BallotIcon from '@mui/icons-material/Ballot';
import Groups2Icon from '@mui/icons-material/Groups2';
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  }); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591
// ----------- Bradcrumbs ----------

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
								<Box 
                sx={{ width: "100%" }}>
                {/* Bradcrumbs */}
                    <Box align="center" display="flex" justifyContent="center" mb={2}>
					<Breadcrumbs aria-label="breadcrumb">
                            <StyledBreadcrumb
                            component="a"
                            href="/verificacion"
                            label="Verificación"
                            icon={<HomeIcon fontSize="small" />}
                            />
                            <StyledBreadcrumb 
                            component="a"
                            href="/verificacion/visualizacion"
                            icon={<AllInboxIcon fontSize="small" />}
                            label="Jornadas" 
                            />
							<StyledBreadcrumb 
                            component="a"
                            href="/verificacion/visualizacion/boleta"
                            icon={<BallotIcon fontSize="small" />}
                            label="Boletas" 
                            />
                            <StyledBreadcrumb
                            label="Folios"
                            icon={<Groups2Icon fontSize="small" />}
                            />
                        </Breadcrumbs>
                        </Box>
                {/* Bradcrumbs */}
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
				</Box>
			</Container>
		</Box>
	);
};
