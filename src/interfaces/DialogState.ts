export default interface IDialogState {
    status?: boolean;
    type?: any;
    closeable?: boolean;
    text?: string;
    buttons: Array<any>;
    options?: Array<any>;
    maxLength?: number;
    value?: any;
    onSubmit?: ((p?: any) => any) | any;
    onClose?: ((p?: any) => any) | any;
}