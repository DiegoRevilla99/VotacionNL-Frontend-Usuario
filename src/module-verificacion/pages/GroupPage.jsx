import { Box, Button, CardActions , CardActionArea, Stepper, TextField, Typography, Grid } from "@mui/material";
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
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { experimentalStyled } from '@mui/material/styles';
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

const Item = experimentalStyled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  

  const rows = [
    { id: 1, folio:'JE22-ORD-GHR41S', sentido: 'Matias Oropeza Oropeza '},
    { id: 2, folio:'JE22-ORD-GHR42S', sentido: 'Isidoro Arriaga Arriaga'},
    { id: 3, folio:'JE22-ORD-GHR43S', sentido: 'Octaviano Cristobal'},
    { id: 4, folio:'JE22-ORD-GHR44S', sentido: 'Gerard Hermilo Buenrostro'},
    { id: 5, folio:'JE22-ORD-GHR45S', sentido: 'Paola Gaspar Hurtado'},
    { id: 6, folio:'JE22-ORD-GHR46S', sentido: 'Melissa Librado Rojas'}, 
    { id: 7, folio:'JE22-ORD-GHR47S', sentido: 'Karime Nereida Pardo'},
    { id: 8, folio:'JE22-ORD-GHR48S', sentido: 'Elizabeth Cristian Balam'}, 
    { id: 9, folio:'JE22-ORD-GHR49S', sentido: 'Nahomi Elvia Vilchis'},
  ];



export const GroupPage = () => {
	const navigate = useNavigate();
  const [searchJornada, setSearchJornada] = useState('');
	const onCancel = () => {
		navigate("/verificacion/visualizacion/boleta");
	};
	return (
		<Box pt="1.5rem">
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
					            <Breadcrumbs aria-label="breadcrumb" maxItems={2}>
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
                          xs: "1.2rem",
                          sm: "1.3rem",
                          md: "1.4rem",
                          lg: "1.5rem",
                          xl: "1.5rem",
                      },
                      }}
                    >
                       Folios y sus sentidos de acuerdo a la boleta *name de la boleta*
					</Typography>
          <Box 
                    ml={{											
                        xs: 2,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 4,
                    }} 
                    mr={{											
                        xs: 2,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 4,
                    }} 
                    sx={{ 
                        display: 'flex', 
                        justifyContent:'flex-end' }}>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Ingrese el nombre o folio"
                            sx={{ width: {
                                xs: "100%",
                                sm: "100%",
                                md: "50%",
                                lg: "40%",
                                xl: "40%",
                            } }}
                            size="normal"
                            placeholder="Ejemplo: Jornada..."
                            onChange={(e) => setSearchJornada(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon/>
                                </InputAdornment>
                            ),
                            }}
                            variant="standard"
                        />
                    </Box>
                    <Box ml={1} mr={1} mt={4}>
                        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 8 }}>
                            {rows.filter((jornada) => jornada.folio.toLowerCase().includes(searchJornada)
                            || jornada.folio.toUpperCase().includes(searchJornada)
                            ).map((jornada) => (
                            <Grid item xs={4} sm={4} md={4} key={jornada.id}>
                                <Item
                                style={{ 
                                    // border: "1px solid #D0D0D0", 
                                    background: "#7e328b80"
                                }} 
                                >
                                <Typography
                                    color="#EEEBDF"
                                    // color="#FAFAF9"
                                    // align="left"
                                    sx={{
                                        fontSize: {
                                            xs: "1.1rem",
                                            sm: "1.2rem",
                                            md: "1.3rem",
                                            lg: "1.4rem",
                                            xl: "1.4rem",
                                        },
                                    }}
                                >
                                  Folio: {jornada.folio}	 
                                </Typography>
                                <Typography
                                    color="#EEEBDF"
                                    // align="left"
                                    // mb="1rem"
                                    // align="center"
                                    sx={{
                                      fontSize: {
                                        xs: "1.1rem",
                                        sm: "1.2rem",
                                        md: "1.3rem",
                                        lg: "1.4rem",
                                        xl: "1.4rem",
                                    },
                                    }}
                                >
                                  Sentido: {jornada.sentido}	 
                                </Typography>
                                </Item>

                            </Grid>
                            ))}
                        </Grid>
                    </Box>

				</Box>
			</Container>
		</Box>
	);
};
