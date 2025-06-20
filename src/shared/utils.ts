//Shared
import {
    weatherIcons,
    weatherTypes
} from "./const";


/**
 * getWeatherNameByCode
 * 
 * Visszatér az időjárási állapot nevével a megadott kód alapján
 * 
 * @param weatherCode 
 * @returns 
 */
export function getWeatherNameByCode(weatherCode: number | undefined) {
    switch (weatherCode) {
        case 0: return weatherTypes.CLEAR;
        case 1: return weatherTypes.OVERCAST;
        case 2: return weatherTypes.OVERCAST;
        case 3: return weatherTypes.OVERCAST;
        case 45: return weatherTypes.FOG;
        case 48: return weatherTypes.FOG;
        case 51: return weatherTypes.DRIZZLE;
        case 53: return weatherTypes.DRIZZLE;
        case 55: return weatherTypes.DRIZZLE;
        case 56: return weatherTypes.FREEZING;
        case 57: return weatherTypes.FREEZING;
        case 61: return weatherTypes.RAIN;
        case 63: return weatherTypes.RAIN;
        case 65: return weatherTypes.RAIN;
        case 66: return weatherTypes.FREEZING;
        case 67: return weatherTypes.FREEZING;
        case 71: return weatherTypes.SNOW;
        case 73: return weatherTypes.SNOW;
        case 75: return weatherTypes.SNOW;
        case 77: return weatherTypes.SNOWGRAIN;
        case 80: return weatherTypes.SHOWERS;
        case 81: return weatherTypes.SHOWERS;
        case 82: return weatherTypes.SHOWERS;
        case 85: return weatherTypes.SNOWERS;
        case 86: return weatherTypes.SNOWERS;
        case 95: return weatherTypes.STORM;
        case 96: return weatherTypes.STORM;
        case 99: return weatherTypes.STORM;
        default: return "N/A";
    }
}


/**
 * getWeatherIconByCode
 * 
 * Visszatér az időjárási állapot ikonjával a megadott kód alapján
 * 
 * @param weatherCode 
 * @see https://erikflowers.github.io/weather-icons/
 * @returns 
 */
export function getWeatherIconByCode(weatherCode: number | undefined) {
    const date = new Date();

    const mh = 6;
    const nh = 20;

    switch (weatherCode) {
        case 0: return (date.getHours() < nh && date.getHours() > mh) ? weatherIcons.CLEAR.day : weatherIcons.CLEAR.night;
        case 1: return (date.getHours() < nh && date.getHours() > mh) ? weatherIcons.OVERCAST.day : weatherIcons.OVERCAST.night;
        case 2: return (date.getHours() < nh && date.getHours() > mh) ? weatherIcons.OVERCAST.day : weatherIcons.OVERCAST.night;
        case 3: return (date.getHours() < nh && date.getHours() > mh) ? weatherIcons.OVERCAST.day : weatherIcons.OVERCAST.night;
        case 45: return weatherIcons.FOG;
        case 48: return weatherIcons.FOG;
        case 51: return weatherIcons.DRIZZLE;
        case 53: return weatherIcons.DRIZZLE;
        case 55: return weatherIcons.DRIZZLE;
        case 56: return weatherIcons.FREEZING;
        case 57: return weatherIcons.FREEZING;
        case 61: return weatherIcons.RAIN;
        case 63: return weatherIcons.RAIN;
        case 65: return weatherIcons.RAIN;
        case 66: return weatherIcons.FREEZING;
        case 67: return weatherIcons.FREEZING;
        case 71: return weatherIcons.SNOW;
        case 73: return weatherIcons.SNOW;
        case 75: return weatherIcons.SNOW;
        case 77: return weatherIcons.SNOWGRAIN;
        case 80: return weatherIcons.SHOWERS;
        case 81: return weatherIcons.SHOWERS;
        case 82: return weatherIcons.SHOWERS;
        case 85: return weatherIcons.SNOWERS;
        case 86: return weatherIcons.SNOWERS;
        case 95: return weatherIcons.STORM;
        case 96: return weatherIcons.STORM;
        case 99: return weatherIcons.STORM;
        default: return weatherIcons.DEFAULT;
    }
}