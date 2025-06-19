//React
import {
    useEffect,
    useState
} from 'react';

//Onsen UI
import {
    Page,
    ProgressCircular
} from 'react-onsenui';

//Axios
import axios from 'axios';

//Views
import Home from '../Home';

//Components
import Text from '../../components/Text';

//Shared
import xml from '../../shared/strings.xml';
import {
    appName,
    loadingStates,
} from '../../shared/const';

//Styles
import styles from './Initialize.module.css';


/**
 * Interfaces
 * 
 */
interface Props {
    navigator: any;
}


/**
 * Initialize
 *  
 * @returns
 */
function Initialize({ navigator }: Props) {
    //States
    const [progress, setProgress] = useState<number>(loadingStates.init);
    const [progressText, setProgressText] = useState<string>("Betöltés");


    useEffect(() => {
        switch (progress) {
            case loadingStates.init: {
                setProgress(loadingStates.strings);
                return;
            }
            case loadingStates.strings: {
                loadStrings();
                setProgressText("Alkalmazás adatok betöltése");
                return;
            }
            default: {
                openApplication();
                setProgressText("Alkalmazás megnyitása");
                return;
            }
        }
        //eslint-disable-next-line
    }, [progress]);


    /**
     * loadStrings
     * 
     */
    const loadStrings = async () => {
        //HTTP kérés tulajdonságai
        const config = {
            method: 'GET',
            url: xml,
            headers: {
                "Content-Type": "application/xml; charset=utf-8"
            },
        }

        //HTTP kérés
        const response = await axios.request(config);

        if (response) {
            localStorage.setItem(`${appName}_strings`, response.data);
            setProgress((current: number) => current + 1);
        }
    }


    /**
     * openApplication
     * 
     */
    const openApplication = () => {
        navigator.resetPage({
            component: Home,
            props: {},
        });
    }


    return (
        <Page>
            <div className={styles.container}>
                <Text
                    className={styles.title}
                    node="appname" />

                <br />

                <Text className={styles.text}>
                    {progressText}
                </Text>

                <br />

                <ProgressCircular
                    indeterminate
                    className={styles.progressCircular}
                />
            </div>
        </Page>
    )
}

export default Initialize;