import axios from "axios";

const instance = axios.create({
    baseURL: "https://loanmanagement-i08u.onrender.com",
    withCredentials: true,
});
export default instance;