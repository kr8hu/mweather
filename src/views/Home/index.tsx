//React
import {
    useEffect,
    useState
} from 'react';

//Hooks
import useApp from '../../hooks/useApp';
import useDialog from '../../hooks/useDialog';

//Onsen UI
import ons from 'onsenui';
import { Page } from 'react-onsenui';

//Copmonents
import Weather from './Weather';
import Forecast from './Forecast';

import Text from '../../components/Text';

//Shared
import {
    appName,
    actionTypes,
    dialogTypes
} from '../../shared/const';
import { getWeatherID } from '../../shared/utils';

//Interfaces
import IDialogState from '../../interfaces/DialogState';
import IDialogOption from '../../interfaces/DialogOption';
import IMeteoLocation from '../../interfaces/MeteoLocation';
import { IMeteoForecast } from '../../interfaces/MeteoForecast';

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
     * Hooks
     * 
     */
    const { setAppState } = useApp();
    const { setDialogState } = useDialog();


    /**
     * locationData
     * 
     * Korábban eltárolt helyadatok kiolvasása
     * 
     */
    const locationData = localStorage.getItem(`${appName}_location`);


    /**
     * parsedLocationData
     * 
     * Létező locationData esetén parseolása objektumként vagy null alapérték beállítása
     * 
     */
    const parsedLocationData = locationData ? JSON.parse(locationData) : null;


    /**
     * States
     * 
     */
    const [location, setLocation] = useState<IMeteoLocation | null>(parsedLocationData);
    const [weatherID, setWeatherID] = useState<number>(-1);


    /**
     * openLocationPromptDialog
     * 
     * Létrehoz és megjelenít egy beviteli mezővel rendelkező dialógus ablakot
     * 
     */
    const openLocationPromptDialog = () => {
        const dialogState: IDialogState = {
            status: true,
            type: dialogTypes.PROMPT,
            closeable: false,
            text: "Add meg egy város nevét az adatok megjelenítéséhez",
            buttons: ["Mégse", "OK"],
            onSubmit: handleLocationPromptSubmit,
            onClose: handleLocationPromptClose,
        }

        //Dialógus megjelenítése a megadott tulajdonságokkal
        setDialogState(dialogState);
    }


    /**
     * openLocationSelectDialog
     * 
     * Létrehoz és megjelenít egy lenyíló listával rendelkező dialógus ablakot
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
            onSubmit: handleLocationSelectSubmit,
            onClose: handleLocationSelectClose,
        }

        //Dialógus megjelenítése a megadott tulajdonságokkal
        setDialogState(dialogState);
    }


    /**
     * handleLocationPromptSubmit
     * 
     * Beviteli mezővel rendelkező dialógus ablak 'OK' gombra kattintásakor lefutó funkció
     *  
     * @param data 
     */
    const handleLocationPromptSubmit = async (data: string) => {
        //Elfoglalt/töltési állapotba rakjuk az alkalmazást
        setAppState(actionTypes.app.SET_BUSY, true);

        try {
            //API hívás
            const response = await MeteoService.getLocationByName(data);

            //Válasz esetén
            if (response) {
                //Ha nincs találat a megadott város nevével
                if (response.results.length === 0) {
                    openLocationPromptDialog();
                    return;
                }

                //Egynél több találat esetén
                if (response.results.length > 1) {
                    let options: IDialogOption[] = [];

                    //választási lehetőségek összeállítása
                    for (const result of response.results as IMeteoLocation[]) {
                        options.push({
                            text: result.name,
                            value: JSON.stringify(result)
                        });
                    }

                    //dialog megjelenítés a választási lehetőségekkel
                    openLocationSelectDialog(options);
                    return;
                }

                //Egyetlen találat esetén
                const stringifiedResult = JSON.stringify(response.results[0]);

                handleLocationSelectSubmit(stringifiedResult);
                setAppState(actionTypes.app.SET_BUSY, false);
            }
        } catch (error: any) {
            const toastMessage = "A megadott helységnévvel nem sikerült betölteni az időjárási adatokat.";
            const toastOptions = {
                timeout: 4000,
                force: true
            };

            setAppState(actionTypes.app.SET_BUSY, false);
            ons.notification.toast(toastMessage, toastOptions);
            throw new Error(error);
        }
    }


    /**
     * handleLocationPromptClose
     * 
     * Beviteli mezővel rendelkező dialógus ablak bezárásakor lefutó funkció
     * 
     */
    const handleLocationPromptClose = () => {
        console.log("handleLocationPromptClose");
        setAppState(actionTypes.app.SET_BUSY, false);
    }


    /**
     * handleLocationSelectSubmit
     * 
     * Legördülő listából való kiválasztás után lefutó funkció
     * 
     */
    const handleLocationSelectSubmit = async (value: any) => {
        const locationData: IMeteoLocation = JSON.parse(value);

        setLocation(locationData);
        setAppState(actionTypes.app.SET_BUSY, false);
    }


    /**
     * handleLocationSelectClose
     * 
     * Legördülő listával rendelkező dialógus ablak bezárásakor lefutó funkció
     * 
     */
    const handleLocationSelectClose = () => {
        console.log("handleLocationSelectClose");
        setAppState(actionTypes.app.SET_BUSY, false);
    }


    /**
     * changeWeatherID
     * 
     * A Weather komponensből érkező weather_code értéke alapján az időjárás azonosítóját tároljuk a stateben különböző funckiók ellátáshoz
     * jelen esetben az app témájának megváltoztatásához.
     * 
     * @param data 
     */
    const changeWeatherID = (data: IMeteoForecast) => {
        const weatherID = getWeatherID(data.current.weather_code);
        setWeatherID(weatherID);
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

        //Böngészőben tároljuk
        localStorage.setItem(`${appName}_location`, JSON.stringify(location));
    }, [location]);


    return (
        <Page>
            <div className={styles.container} data-weatherid={weatherID}>
                {/* Háttér réteg */}
                <div className={styles.layer} />

                {/* Tartalom */}
                <div className={styles.row}>
                    <div className={styles.col}>
                        <Weather
                            location={location}
                            onClickLocation={openLocationPromptDialog}
                            onLoaded={changeWeatherID} />
                    </div>
                    <div className={styles.col}>
                        <Text
                            className={styles.forecastTitle}
                            node="forecast_title" />
                        <br />
                        <Forecast
                            location={location} />
                    </div>
                </div>

                <br />

                <Text node="author" />
            </div>
        </Page>
    )
}

export default Home;
