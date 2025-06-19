//React
import {
    useEffect,
    useState
} from 'react';

//Hooks
import useApp from '../../hooks/useApp';
import useDialog from '../../hooks/useDialog';

//Onsen UI
import { Page } from 'react-onsenui';

//Copmonents
import Weather from './Weather';

//Shared
import {
    appName,
    actionTypes,
    dialogTypes
} from '../../shared/const';

//Interfaces
import IDialogState from '../../interfaces/DialogState';
import IDialogOption from '../../interfaces/DialogOption';
import IMeteoLocation from '../../interfaces/MeteoLocation';

//Services
import MeteoService from '../../services/MeteoService';

//Styles
import styles from './Home.module.css';


/**
 * Home
 * 
 * @param props 
 * @returns 
 */
function Home() {
    /**
     * localStorage
     * 
     */
    const locationData = localStorage.getItem(`${appName}_location`);
    const parsedLocationData = locationData ? JSON.parse(locationData) : null;


    /**
     * Hooks
     * 
     */
    const { setAppState } = useApp();
    const { setDialogState } = useDialog();


    /**
     * States
     * 
     */
    const [location, setLocation] = useState<IMeteoLocation | null>(parsedLocationData);


    /**
     * openLocationPromptDialog
     * 
     */
    const openLocationPromptDialog = () => {
        const dialogState: IDialogState = {
            status: true,
            type: dialogTypes.PROMPT,
            closeable: false,
            text: "Add meg egy város nevét az adatok megjelenítéséhez",
            buttons: ["Mégse", "OK"],
            onSubmit: onLocationPromptSubmit,
            onClose: onLocationPromptClose,
        }

        //Dialógus megjelenítése a megadott tulajdonságokkal
        setDialogState(dialogState);
    }


    /**
     * openLocationSelectDialog
     * 
     */
    const openLocationSelectDialog = (options: any) => {
        const dialogState: IDialogState = {
            status: true,
            type: dialogTypes.SELECT,
            closeable: false,
            text: "Válassz ki egy várost az adatok megjelenítéséhez",
            buttons: ["Mégse", "OK"],
            options,
            onSubmit: onLocationSelectSubmit,
            onClose: onLocationSelectClose,
        }

        //Dialógus megjelenítése a megadott tulajdonságokkal
        setDialogState(dialogState);
    }


    /**
     * onLocationPromptSubmit
     * 
     * @param data 
     */
    const onLocationPromptSubmit = async (data: string) => {
        //Elfoglalt/töltési állapotba rakjuk az alkalmazást
        setAppState(actionTypes.app.SET_BUSY, true);

        try {
            //API hívás
            const response = await MeteoService.getLocationByName(data);

            //Válasz esetén
            if (response) {
                setAppState(actionTypes.app.SET_BUSY, false);

                //Ha nincs találat
                if (response.results.length === 0) {
                    openLocationPromptDialog();
                    return;
                }

                //Egynél több találat esetén választási lehetőségek összeállítása és dialog megjelenítés
                if (response.results.length > 1) {
                    let options: IDialogOption[] = [];

                    for (const result of response.results as IMeteoLocation[]) {
                        options.push({
                            text: result.name,
                            value: JSON.stringify(result)
                        });
                    }

                    openLocationSelectDialog(options);
                    return;
                }

                //Egyetlen találat esetén
                const stringifiedResult = JSON.stringify(response.results[0]);
                onLocationSelectSubmit(stringifiedResult);
            }
        } catch (error: any) {
            setAppState(actionTypes.app.SET_BUSY, false);
            throw new Error(error);
        }
    }


    /**
     * onLocationPromptClose
     * 
     */
    const onLocationPromptClose = () => {
        console.log("onLocationPromptClose");
    }


    /**
     * onLocationSelectSubmit
     * 
     */
    const onLocationSelectSubmit = (value: any) => {
        const locationData = JSON.parse(value);
        setLocation(locationData);
    }


    /**
     * onLocationSelectClose
     * 
     */
    const onLocationSelectClose = () => {
        console.log("onLocationSelectClose");
    }


    /**
     * Effects
     * 
     */
    useEffect(() => {
        if (location === null) {
            openLocationPromptDialog();
            return;
        }

        localStorage.setItem(`${appName}_location`, JSON.stringify(location));
    }, [location]);


    return (
        <Page>
            <div className={styles.container} data-theme="default">
                <div className={styles.row}>
                    <div className={styles.col}>
                        <Weather
                            location={location}
                            onChangeLocation={openLocationPromptDialog} />
                    </div>
                    <div className={styles.col}>

                    </div>
                </div>
            </div>
        </Page>
    )
}

export default Home;
