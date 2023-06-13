import axios from "axios";

export const votosAPI = axios.create({
  baseURL: "https://ms-jornada-voto-seguro-2.herokuapp.com/",
});

export const votosNoFormalAPI = axios.create({
  baseURL: "https://ms-jornada-votos-no-formales-2.herokuapp.com/",
});

export const votosConsultaAPI = axios.create({
  baseURL: "https://ms-jornada-voto-consulta-2.herokuapp.com/",
});
