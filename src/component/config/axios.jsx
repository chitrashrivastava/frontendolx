import axios from "axios";

const instance = axios.create({
    baseURL:
         "https://backendolx.vercel.app/",
    withCredentials: true,
});

export default instance;