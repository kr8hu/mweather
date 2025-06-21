//Shared
import {
    weatherTypes
} from "./const";


/**
 * getWeatherType
 * 
 * Visszatér az időjárási állapot tulajdonságaival a megadott kód alapján
 * 
 * @param weatherCode 
 * @returns 
 */
export function getWeatherType(weatherCode: number | undefined) {
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
        default: return weatherTypes.DEFAULT;
    }
}


/**
 * getWeatherIcon
 * 
 * Visszatér az időjárási állapot ikonjával a megadott kód alapján
 * 
 * @param weatherCode 
 * @see https://erikflowers.github.io/weather-icons/
 * @returns 
 */
export function getWeatherIcon(weatherCode: number | undefined) {
    const date = new Date();

    const mh = 6;
    const nh = 20;

    switch (weatherCode) {
        case 0: return (date.getHours() < nh && date.getHours() > mh) ? weatherTypes.CLEAR.icon.day : weatherTypes.CLEAR.icon.night;
        case 1: return (date.getHours() < nh && date.getHours() > mh) ? weatherTypes.OVERCAST.icon.day : weatherTypes.OVERCAST.icon.night;
        case 2: return (date.getHours() < nh && date.getHours() > mh) ? weatherTypes.OVERCAST.icon.day : weatherTypes.OVERCAST.icon.night;
        case 3: return (date.getHours() < nh && date.getHours() > mh) ? weatherTypes.OVERCAST.icon.day : weatherTypes.OVERCAST.icon.night;
        case 45: return weatherTypes.FOG.icon;
        case 48: return weatherTypes.FOG.icon;
        case 51: return weatherTypes.DRIZZLE.icon;
        case 53: return weatherTypes.DRIZZLE.icon;
        case 55: return weatherTypes.DRIZZLE.icon;
        case 56: return weatherTypes.FREEZING.icon;
        case 57: return weatherTypes.FREEZING.icon;
        case 61: return weatherTypes.RAIN.icon;
        case 63: return weatherTypes.RAIN.icon;
        case 65: return weatherTypes.RAIN.icon;
        case 66: return weatherTypes.FREEZING.icon;
        case 67: return weatherTypes.FREEZING.icon;
        case 71: return weatherTypes.SNOW.icon;
        case 73: return weatherTypes.SNOW.icon;
        case 75: return weatherTypes.SNOW.icon;
        case 77: return weatherTypes.SNOWGRAIN.icon;
        case 80: return weatherTypes.SHOWERS.icon;
        case 81: return weatherTypes.SHOWERS.icon;
        case 82: return weatherTypes.SHOWERS.icon;
        case 85: return weatherTypes.SNOWERS.icon;
        case 86: return weatherTypes.SNOWERS.icon;
        case 95: return weatherTypes.STORM.icon;
        case 96: return weatherTypes.STORM.icon;
        case 99: return weatherTypes.STORM.icon;
        default: return weatherTypes.DEFAULT.icon;
    }
}


/**
 * getDayName
 * 
 * Visszatér a megadott dátum napjának nevével
 * 
 * @param date 
 * @returns 
 */
export function getDayName(date: Date) {
    const days = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];
    return days[date.getDay()];
}

