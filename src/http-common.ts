//Axios
import axios, { AxiosRequestConfig } from "axios";

/**
 * axiosConfig
 * 
 */
const axiosConfig: AxiosRequestConfig = {
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