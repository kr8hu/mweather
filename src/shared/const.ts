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
    CLEAR: {
        id: 0,
        name: "Derült égbolt",
        icon: {
            day: "wi-day-sunny",
            night: "wi-night-clear"
        },
    },
    OVERCAST: {
        id: 1,
        name: "Részben felhős, borult",
        icon: {
            day: "wi-day-cloudy",
            night: "wi-night-alt-cloudy"
        },
    },
    FOG: {
        id: 2,
        name: "Köd",
        icon: "wi-fog"
    },
    DRIZZLE: {
        id: 3,
        name: "Szitálás",
        icon: "wi-raindrops"
    },
    FREEZING: {
        id: 4,
        name: "Ónos szitálás",
        icon: "wi-sleet"
    },
    RAIN: {
        id: 5,
        name: "Eső",
        icon: "wi-rain"
    },
    SNOW: {
        id: 6,
        name: "Hóesés",
        icon: "wi-snow"
    },
    SNOWGRAIN: {
        id: 7,
        name: "Hódara",
        icon: "wi-rain-mix"
    },
    SHOWERS: {
        id: 8,
        name: "Zápor",
        icon: "wi-showers"
    },
    SNOWERS: {//tudom, nagyon rossz szójáték.. xD
        id: 9,
        name: "Hózápor",
        icon: "wi-snow"
    },
    STORM: {
        id: 10,
        name: "Zivatar",
        icon: "wi-thunderstorm"
    },
    DEFAULT: {
        id: -1,
        name: "N/A",
        icon: "wi-na"
    }
}