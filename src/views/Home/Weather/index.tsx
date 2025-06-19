//Components
import Text from '../../../components/Text';

//Interfaces
import IMeteoLocation from '../../../interfaces/MeteoLocation';

//Styles
import styles from './Weather.module.css';


/**
 * Interfaces
 * 
 */
interface Props {
    location: IMeteoLocation | null;
    onChangeLocation?: () => void;
}


/**
 * Weather
 * 
 * Időjárási adatokat megjelenítő komponens
 * 
 * @return
 */
function Weather({ location, onChangeLocation }: Props) {
    /**
     * locationPlaceholder
     * 
     */
    const locationPlaceholder = "Kattints ide a város kiválasztásához";


    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Text
                        className={styles.location}
                        onClick={onChangeLocation}>
                        {location?.name || locationPlaceholder}
                    </Text>
                </div>
                <div className={styles.col}>
                    <div className={styles.dataContainer}>
                        <div className={styles.degreeContainer}>
                            <Text className={styles.value}>
                                N/A
                            </Text>
                        </div>
                        <div className={styles.iconContainer}>
                            <Text className={styles.icon}>
                                -
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <Text>
                        -
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default Weather;
