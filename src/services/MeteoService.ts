//Axios
import { AxiosResponse } from "axios";
import http from "../http-common";


/**
 * MeteoService
 * 
 * Időjárási adatokkal kapcsolatos HTTP kéréseket kezelő service
 */
class MeteoService {

    /**
     * geoApi
     * 
     * Helyadatokat szolgáltató api
     */
    geoApi = `https://geocoding-api.open-meteo.com/v1/`;


    /**
     * forecastApi
     * 
     * Időjárási adatokat szolgáltató api
     */
    forecastApi = `https://api.open-meteo.com/v1/`;


    /**
     * getLocationByName
     * 
     * @param name
     * @returns 
     */
    async getLocationByName(name: string): Promise<any> {
        const url = this.geoApi + `search?name=${name}&count=10&language=en&format=json`;
        const response: AxiosResponse<any, any> = await http.get(url);

        return response.data;
    }


    /**
     * getWeatherByGeolocation
     * 
     * @returns 
     */
    async getWeatherByGeolocation(lat: number, lon: number): Promise<any> {
        const url = this.forecastApi + `forecast?latitude=${lat.toString()}&longitude=${lon.toString()}&current=temperature_2m,weather_code`;
        const response: AxiosResponse<any, any> = await http.get(url);

        return response.data;
    }


    /**
     * getForecastByGeolocation
     * 
     * @returns 
     */
    async getForecastByGeolocation(lat: number, lon: number): Promise<any> {
        const url = this.forecastApi + `forecast?latitude=${lat.toString()}&longitude=${lon.toString()}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max`;
        const response: AxiosResponse<any, any> = await http.get(url);

        return response.data;
    }


    /**
     * getForecastByQuery
     * 
     */
    async getForecastByQuery(queryString: string): Promise<any> {
        const url = `${this.forecastApi}forecast?${queryString}`;
        const response: AxiosResponse<any, any> = await http.get(url);

        return response.data;
    }
}

//eslint-disable-next-line
export default new MeteoService();
