//React
import { useContext } from "react";

//Ctx
import { AppContext } from "../context/App";


/**
 * useApp
 * 
 * App state kezelő hook
 */
const useApp = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('A useApp hook nem használható az AppProvider komponensen kívül.');
    }

    return context;
}

export default useApp;
