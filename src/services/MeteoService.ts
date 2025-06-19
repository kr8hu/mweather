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
     * getLocationByName
     * 
     * @param name
     * @returns 
     */
    async getLocationByName(name: string): Promise<any> {
        const url = `search?name=${name}&count=10&language=en&format=json`;
        const response: AxiosResponse<any, any> = await http.get(url);

        return response.data;
    }
}

//eslint-disable-next-line
export default new MeteoService();
