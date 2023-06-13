import axios from "axios";

export const imagesAPI = axios.create({
  baseURL: "https://ms-jornada-upload-images-2.herokuapp.com/",
});
