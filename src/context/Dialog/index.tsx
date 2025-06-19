//React
import { 
    createContext, 
    useReducer 
} from 'react';

//Reducer
import { 
    reducer, 
    initialState 
} from './reducer';

//Interfaces
import IDialogContext from '../../interfaces/DialogContext';


/**
 * Props
 * 
 */
interface Props {
    children: any;
}


export const DialogContext = createContext<IDialogContext>({
    dialogState: initialState,
    setDialogState: () => null
});


export const DialogProvider = (props: Props) => {
    const [dialogState, dispatch] = useReducer(reducer, initialState);
    //const setdialogState: DialogState = (type: any, payload: any) => dispatch({ type, payload });

    const setDialogState = (arg0: any, arg1?: any) => {
        dispatch({
            type: typeof arg0 == 'object' ? undefined : arg0,
            payload: typeof arg0 == 'object' ? arg0 : arg1
        });
    }

    return (
        <DialogContext.Provider value={{
            dialogState,
            setDialogState
        }}>
            {props.children}
        </DialogContext.Provider>
    )
}