import axios from "axios";

export const jornadaNoFormalApi = axios.create({
  baseURL: "https://ms-jornada-no-formal-2.herokuapp.com/",
});
