//Shared
import {
    weatherTypes
} from "./const";


/**
 * getWeatherID
 * 
 * Visszatér az időjárási állapot azonosítójával a megadott kód alapján
 * 
 * @param weatherCode 
 * @returns 
 */
export function getWeatherID(weatherCode: number | undefined) {
    switch (weatherCode) {
        case 0: return weatherTypes.CLEAR.id;
        case 1: return weatherTypes.OVERCAST.id;
        case 2: return weatherTypes.OVERCAST.id;
        case 3: return weatherTypes.OVERCAST.id;
        case 45: return weatherTypes.FOG.id;
        case 48: return weatherTypes.FOG.id;
        case 51: return weatherTypes.DRIZZLE.id;
        case 53: return weatherTypes.DRIZZLE.id;
        case 55: return weatherTypes.DRIZZLE.id;
        case 56: return weatherTypes.FREEZING.id;
        case 57: return weatherTypes.FREEZING.id;
        case 61: return weatherTypes.RAIN.id;
        case 63: return weatherTypes.RAIN.id;
        case 65: return weatherTypes.RAIN.id;
        case 66: return weatherTypes.FREEZING.id;
        case 67: return weatherTypes.FREEZING.id;
        case 71: return weatherTypes.SNOW.id;
        case 73: return weatherTypes.SNOW.id;
        case 75: return weatherTypes.SNOW.id;
        case 77: return weatherTypes.SNOWGRAIN.id;
        case 80: return weatherTypes.SHOWERS.id;
        case 81: return weatherTypes.SHOWERS.id;
        case 82: return weatherTypes.SHOWERS.id;
        case 85: return weatherTypes.SNOWERS.id;
        case 86: return weatherTypes.SNOWERS.id;
        case 95: return weatherTypes.STORM.id;
        case 96: return weatherTypes.STORM.id;
        case 99: return weatherTypes.STORM.id;
        default: return weatherTypes.DEFAULT.id;
    }
}


/**
 * getWeatherName
 * 
 * Visszatér az időjárási állapot nevével a megadott kód alapján
 * 
 * @param weatherCode 
 * @returns 
 */
export function getWeatherName(weatherCode: number | undefined) {
    switch (weatherCode) {
        case 0: return weatherTypes.CLEAR.name;
        case 1: return weatherTypes.OVERCAST.name;
        case 2: return weatherTypes.OVERCAST.name;
        case 3: return weatherTypes.OVERCAST.name;
        case 45: return weatherTypes.FOG.name;
        case 48: return weatherTypes.FOG.name;
        case 51: return weatherTypes.DRIZZLE.name;
        case 53: return weatherTypes.DRIZZLE.name;
        case 55: return weatherTypes.DRIZZLE.name;
        case 56: return weatherTypes.FREEZING.name;
        case 57: return weatherTypes.FREEZING.name;
        case 61: return weatherTypes.RAIN.name;
        case 63: return weatherTypes.RAIN.name;
        case 65: return weatherTypes.RAIN.name;
        case 66: return weatherTypes.FREEZING.name;
        case 67: return weatherTypes.FREEZING.name;
        case 71: return weatherTypes.SNOW.name;
        case 73: return weatherTypes.SNOW.name;
        case 75: return weatherTypes.SNOW.name;
        case 77: return weatherTypes.SNOWGRAIN.name;
        case 80: return weatherTypes.SHOWERS.name;
        case 81: return weatherTypes.SHOWERS.name;
        case 82: return weatherTypes.SHOWERS.name;
        case 85: return weatherTypes.SNOWERS.name;
        case 86: return weatherTypes.SNOWERS.name;
        case 95: return weatherTypes.STORM.name;
        case 96: return weatherTypes.STORM.name;
        case 99: return weatherTypes.STORM.name;
        default: return weatherTypes.DEFAULT.name;
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

