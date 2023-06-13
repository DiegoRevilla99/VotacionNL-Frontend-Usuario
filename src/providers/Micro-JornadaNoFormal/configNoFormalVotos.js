import axios from "axios";

export const jornadaNoFormalVotosApi = axios.create({
  baseURL: "https://ms-jornada-votos-no-formales-2.herokuapp.com/",
});
