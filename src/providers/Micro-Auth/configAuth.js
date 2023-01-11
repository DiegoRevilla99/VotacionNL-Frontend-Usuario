import axios from "axios";

const TOKEN_KEY = "VOTACION_TOKEN";

export const authAPI = axios.create({
	baseURL: "https://ms-jornada-auth-nl.herokuapp.com/",
});

// export const initAxiosInterceptors = () => {
// 	axios.interceptors.request.use((config) => {
// 		const token =
// 	})
// }

export const setToken = (token) => {
	sessionStorage.setItem(TOKEN_KEY, token);
};
