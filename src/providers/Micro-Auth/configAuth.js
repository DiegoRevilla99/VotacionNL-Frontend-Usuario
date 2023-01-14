import axios from "axios";

export const TOKEN_KEY = "VOTACION_TOKEN";

export const authAPI = axios.create({
	baseURL: "https://ms-jornada-auth-nl.herokuapp.com/",
});

export const initAxiosInterceptors = () => {
	// axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem("access_token")}`;
	// console.log("ENTRA");
	// axios.defaults.headers.post["Authorization"] = `Bearer ${sessionStorage.getItem(TOKEN_KEY)}`;
	// authAPI.defaults.headers.post["Authorization"] = `Bearer ${sessionStorage.getItem(TOKEN_KEY)}`;
	// axios.interceptors.request.use((config) => {
	// 	const token = getToken();
	// 	if (token) {
	// 		console.log("ENCONTRÓ EL TOKEN");
	// 		config.headers.Authorization = `bearer ${token}`;
	// 	}
	// 	return config;
	// });
};

export const setToken = (token) => {
	sessionStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
	return sessionStorage.getItem(TOKEN_KEY);
};

export const deleteToken = () => {
	sessionStorage.removeItem(TOKEN_KEY);
};
