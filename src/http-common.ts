//Axios
import axios, { AxiosRequestConfig } from "axios";

//Shared
import { url } from "./shared/const";


/**
 * axiosConfig
 * 
 */
const axiosConfig: AxiosRequestConfig = {
    baseURL: url,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
}


/** 
 * http
 * 
*/
const http = axios.create(axiosConfig);

export default http;