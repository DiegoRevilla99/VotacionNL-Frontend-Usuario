import axios from "axios";

export const votosAPI = axios.create({
	baseURL: "https://ms-jornada-voto-seguro.herokuapp.com/",
});
