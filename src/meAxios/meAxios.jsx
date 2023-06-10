import axios from "axios";

export const meAxios = axios.create({
baseURL:'https://jsonplaceholder.typicode.com',
timeout:5000,
timeoutErrorMessage:"زمان پاسخ طولانی شد",
})