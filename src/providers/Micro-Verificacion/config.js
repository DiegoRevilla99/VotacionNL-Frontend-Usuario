import axios from "axios";

export const votosSegurosAPI = axios.create({
  baseURL: "https://ms-jornada-voto-seguro-2.herokuapp.com/votos_seguros/",
});
