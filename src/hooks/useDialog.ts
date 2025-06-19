//React
import { useContext } from "react";

//Ctx
import { DialogContext } from "../context/Dialog";


/**
 * useDialog
 * 
 * Dialog state kezelő hook
 */
const useDialog = () => {
    const context = useContext(DialogContext);

    if (!context) {
        throw new Error('A useDialog hook nem használható a DialogProvider komponensen kívül.');
    }

    return context;
}

export default useDialog;
