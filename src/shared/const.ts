/**
 * appName
 * 
 */
export const appName = "mweather";


/**
 * Action Types
 * 
 */
export const actionTypes = {
    app: {
        SET_NAVIGATOR: 'APP_SET_NAVIGATOR',
        SET_BUSY: 'APP_SET_BUSY',
    },
    dialog: {
        SET_STATUS: 'DIALOG_SET_STATUS',
        SET_VALUE: 'DIALOG_SET_VALUE'
    }
}


/**
 * Animation Types
 * 
 */
export const animationTypes = {
    LIFT: "lift",
    SLIDE: "slide",
    FADE: "fade"
}


/**
 * Dialog Types
 * 
 */
export const dialogTypes = {
    ALERT: 'DIALOG_ALERT',
    CONFIRM: 'DIALOG_CONFIRM',
    PROMPT: 'DIALOG_PROMPT',
    SELECT: 'DIALOG_SELECT'
}


/**
 * loadingStates
 * 
 */
export const loadingStates = {
    init: 0,
    strings: 1,
    finished: 100
}


/**
 * weatherTypes
 * 
 */
export const weatherTypes = {
    CLEAR: "Derült égbolt",
    OVERCAST: "Részben felhős, borult",
    FOG: "Köd",
    DRIZZLE: "Szitálás",
    FREEZING: "Ónos szitálás",
    RAIN: "Eső",
    SNOW: "Hóesés",
    SNOWGRAIN: "Hódara",
    SHOWERS: "Zápor",
    SNOWERS: "Hózápor", //tudom, nagyon rossz szójáték.. xD
    STORM: "Zivatar"
}


/**
 * weatherIcons
 * 
 * @see https://erikflowers.github.io/weather-icons/
 */
export const weatherIcons = {
    CLEAR: {
        day: "wi-day-sunny",
        night: "wi-night-clear"
    },
    OVERCAST: {
        day: "wi-day-cloudy",
        night: "wi-night-alt-cloudy"
    },
    FOG: "wi-fog",
    DRIZZLE: "wi-raindrops",
    FREEZING: "wi-sleet",
    RAIN: "wi-rain",
    SNOW: "wi-snow",
    SNOWGRAIN: "wi-rain-mix",
    SHOWERS: "wi-showers",
    SNOWERS: "wi-snow",
    STORM: "wi-thunderstorm",
    DEFAULT: "wi-na"
}