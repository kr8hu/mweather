//React
import {
    useState,
    useEffect
} from 'react';

//Onsen UI
import ons from 'onsenui';

//Components
import Chart from '../Chart';
import ForecastDay from './ForecastDay';
import Text from '../../../components/Text';

//Interfaces
import IMeteoLocation from '../../../interfaces/MeteoLocation';
import { IMeteoForecast } from '../../../interfaces/MeteoForecast';

//Services
import MeteoService from '../../../services/MeteoService';

//Styles
import styles from './Forecast.module.css';
import { getDayName } from '../../../shared/utils';


/**
 * Interfaces
 * 
 */
interface Props {
    location: IMeteoLocation | null;
}


/**
 * Forecast
 * 
 * Időjárás-előrejelzési adatokat megjelenítő komponens
 * 
 * @return
 */
function Forecast({ location }: Props) {
    /**
     * States
     * 
     */
    const [data, setData] = useState<IMeteoForecast | null>(null);
    const [placeholder, setPlaceholder] = useState<string>("Előrejelzési adatok betöltése folyamatban...");


    /**
     * getForecastByLocation
     * 
     * Előrejelzési adatok lekérése a megadott helyadatok alapján
     * 
     * @param location 
     */
    const getForecastByLocation = async (location: IMeteoLocation) => {
        try {
            const response = await MeteoService.getForecastByGeolocation(location.latitude, location.longitude);

            if (response) {
                setData(response);
            }
        } catch (error: any) {
            const errorMessage = "Hiba történt az előrejelzési adatok betöltése közben.";
            const toastOptions = {
                timeout: 4000,
                force: true
            };

            ons.notification.toast(errorMessage, toastOptions);
            setPlaceholder(errorMessage);
            throw new Error(error);
        }
    }


    /**
     * renderForecast
     * 
     */
    const renderForecast = () => {
        if (data === null) return <Text>{placeholder}</Text>;

        return data.daily.time.map((t: string, idx: number) => {
            return <ForecastDay
                key={idx}
                date={t}
                minTemp={data.daily.temperature_2m_min[idx]}
                maxTemp={data.daily.temperature_2m_max[idx]}
                precipitationProbability={data.daily.precipitation_probability_max[idx]}
            />
        });
    }


    /**
     * Effects
     * 
     */
    useEffect(() => {
        if (location === null) return;

        getForecastByLocation(location);
    }, [location]);


    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    {renderForecast()}
                </div>
                <div className={styles.col}>
                    {location && <Chart
                        labels={data?.daily.time.map((t: string) => getDayName(new Date(t)))}
                        values={data?.daily.temperature_2m_max}
                    />}
                </div>
            </div>
        </div>
    )
}

export default Forecast;
