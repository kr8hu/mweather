//Interfaces
import IAction from '../../interfaces/Action';

//Shared
import {
    actionTypes,
} from '../../shared/const';


export const reducer = (state: any, action: IAction) => {
    switch (action.type) {
        case actionTypes.app.SET_NAVIGATOR:
            return {
                ...state,
                navigator: action.payload
            }
        case actionTypes.app.SET_BUSY:
            return {
                ...state,
                busy: action.payload
            }
        default:
            return state
    }
}

export const initialState = {
    navigator: undefined,
    busy: false,
}