//Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

//Styles
import styles from './Chart.module.css';


/**
 * ChartJS
 * 
 */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


/**
 * Props
 * 
*/
interface Props {
    values: any;
    labels?: string[]
}


/**
 * Chart
 * 
 * Az adott napokon legmagasabb hőmérsékleteketi értékeket megjelenítő diagram
 * 
 * @return
 */
function Chart({ values }: Props) {
    return (
        <div className={styles.container}>

        </div>
    )
}

export default Chart;
