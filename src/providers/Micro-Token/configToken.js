import axios from "axios";

export const tokenApi = axios.create({
  baseURL: "https://ms-jornada-token-email-2.herokuapp.com/",
});

export const tokenSmsApi = axios.create({
  baseURL: "https://ms-jornada-token-sms-2.herokuapp.com/",
});
