import axios from "axios";

export const tokenApi = axios.create({
	baseURL: "https://ms-jornada-token-email.herokuapp.com/",
});
