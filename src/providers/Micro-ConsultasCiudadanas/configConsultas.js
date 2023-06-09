import axios from "axios";

export const consultasAPI = axios.create({
  baseURL: "https://ms-jornada-consulta-nl-2.herokuapp.com/",
});

// https://ms-jornada-consulta-nl.herokuapp.com/jornada/consulta/informacion/completa
