//React
import { 
    useEffect, 
    useState 
} from 'react';

//Onsen UI
import ons from 'onsenui';

//Components
import Text from '../../../components/Text';

//Interfaces
import IMeteoLocation from '../../../interfaces/MeteoLocation';
import { IMeteoForecast } from '../../../interfaces/MeteoForecast';

//Shared
import {
    getWeatherIcon,
    getWeatherName
} from '../../../shared/utils';

//Services
import MeteoService from '../../../services/MeteoService';

//Styles
import styles from './Weather.module.css';


/**
 * Interfaces
 * 
 */
interface Props {
    location: IMeteoLocation | null;
    onLoaded?: (data: IMeteoForecast) => void;
    onClickLocation?: () => void;
}


/**
 * Weather
 * 
 * Időjárási adatokat megjelenítő komponens
 * 
 * @return
 */
function Weather({ location, onLoaded, onClickLocation }: Props) {
    /**
     * States
     * 
     */
    const [data, setData] = useState<IMeteoForecast | null>(null);


    /**
     * locationPlaceholder
     * 
     */
    const locationPlaceholder = "Kattints ide a város kiválasztásához";


    /**
     * formattedTemperatureValue
     * 
     */
    const formattedTemperatureValue = data?.current.temperature_2m.toFixed(0);


    /**
     * temperaturePlaceholder
     * 
     */
    const temperaturePlaceholder = "?";


    /**
     * currentWeatherName
     * 
     */
    const currentWeatherName = getWeatherName(data?.current.weather_code);


    /**
     * currentWeatherIcon
     * 
     */
    const currentWeatherIcon = getWeatherIcon(data?.current.weather_code)


    /**
     * getWeatherByLocation
     * 
     * Időjárási adatok lekérése helyadatok alapján
     * 
     * @param location 
     */
    const getWeatherByLocation = async (location: IMeteoLocation) => {
        try {
            const response = await MeteoService.getWeatherByGeolocation(location.latitude, location.longitude);

            if (response) {
                setData(response);
            }
        } catch (error: any) {
            const toastMessage = "Hiba történt az időjárási adatok betöltése közben.";
            const toastOptions = {
                timeout: 4000,
                force: true
            };

            ons.notification.toast(toastMessage, toastOptions);
            throw new Error(error);
        }
    }


    /**
     * Effects
     * 
     */
    useEffect(() => {
        if (location === null) return;

        getWeatherByLocation(location);
    }, [location]);


    useEffect(() => {
        if (data && onLoaded) {
            onLoaded(data);
        }
    }, [data, onLoaded]);


    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Text
                        className={styles.location}
                        onClick={onClickLocation}>
                        {location?.name || locationPlaceholder}
                    </Text>
                </div>
                <div className={styles.col}>
                    <div className={styles.dataContainer}>
                        <div className={styles.temperatureContainer}>
                            <Text className={styles.temperature}>
                                {data?.current.temperature_2m != null
                                    ? formattedTemperatureValue
                                    : temperaturePlaceholder}
                            </Text>
                        </div>
                        <div className={styles.iconContainer}>
                            <Text className={styles.icon}>
                                <i className={`wi ${currentWeatherIcon}`}></i>
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <Text>
                        {currentWeatherName}
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default Weather;
