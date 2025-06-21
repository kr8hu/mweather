//Components
import Text from '../../../../components/Text';

//Shared
import { getDayName } from '../../../../shared/utils';

//Styles
import styles from './ForecastDay.module.css';


/**
 * Props
 * 
 */
interface Props {
    key: any;
    date: string;
    minTemp: number;
    maxTemp: number;
    precipitationProbability: number;
}


/**
 * ForecastDay
 * 
 * Előrejelzés egy napi adatait megjelenítő komponens
 * 
 * @return
 */
function ForecastDay({
    key,
    date,
    minTemp,
    maxTemp,
    precipitationProbability
}: Props) {
    /**
     * parsedDate
     * 
     */
    const parsedDate = new Date(date);


    /**
     * dayName
     * 
     */
    const dayName = getDayName(parsedDate);


    /**
     * formattedMinTemp
     * 
     */
    const formattedMinTemp = minTemp.toFixed(0).toString();


    /**
     * formattedMinTemp
     * 
     */
    const formattedMaxTemp = maxTemp.toFixed(0).toString();


    /**
     * formattedTemperatures
     * 
     */
    const formattedTemperatures = `${formattedMinTemp} °C / ${formattedMaxTemp} °C`;


    /**
     * formattedPrecipitationProbability
     * 
     */
    const formattedPrecipitationProbability = `${precipitationProbability}%`;


    return (
        <div key={key} className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Text className={styles.dayName}>
                        {dayName}
                    </Text>
                </div>
                <div className={styles.col}>
                    <div>
                        <i className={`${ styles.icon } wi wi-rain`}></i>
                        <Text className={styles.precipitationProbability}>
                            {formattedPrecipitationProbability}
                        </Text>
                    </div>
                </div>
                <div className={styles.col}>
                    <Text className={styles.temperatures}>
                        {formattedTemperatures}
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default ForecastDay;
