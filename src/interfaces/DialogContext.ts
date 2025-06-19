//Interfaces
import IDialogState from "./DialogState";


export default interface IDialogContext {
    dialogState: IDialogState;
    setDialogState: (type: any, payload?: any) => void;
}