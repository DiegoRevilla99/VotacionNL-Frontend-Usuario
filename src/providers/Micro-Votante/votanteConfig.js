import axios from "axios";

export const votanteAPI = axios.create({
  baseURL: "https://ms-votante-2.herokuapp.com/votante/",
});

export const votanteJornadaAPI = axios.create({
  baseURL: "https://ms-votante-2.herokuapp.com/",
});
