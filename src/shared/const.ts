/**
 * appName
 * 
 */
export const appName = "mweather";


/**
 * Url
 * 
 */
export const url = `https://geocoding-api.open-meteo.com/v1/`;


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
