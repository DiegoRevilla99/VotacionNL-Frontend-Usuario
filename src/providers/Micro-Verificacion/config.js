import axios from "axios";

export const votosSegurosAPI = axios.create({
  baseURL: "https://ms-jornada-voto-seguro-2.herokuapp.com/",
  // baseURL: "https://ms-jornada-voto-seguro-2.herokuapp.com/votos_seguros/",
});
export const votosNoFormalAPI = axios.create({
  baseURL: "https://ms-jornada-votos-no-formales-2.herokuapp.com/votos/no/formal/",
  // baseURL: "https://ms-jornada-voto-seguro-2.herokuapp.com/votos_seguros/",
});
