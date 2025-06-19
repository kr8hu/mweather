//Interfaces
import IAppState from "./AppState";


export default interface IAppContext {
    appState: IAppState;
    setAppState: (type: any, payload: any) => void;
}
