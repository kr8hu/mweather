//React
import {
  useEffect,
  useState
} from 'react';

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
import * as ReactChart from 'react-chartjs-2';

//Styles
import styles from './Chart.module.css';
import Text from '../../../components/Text';


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
function Chart({ labels, values }: Props) {
  /**
   * initialData
   * 
   */
  const initialData = {
    labels: labels || [],
    datasets: []
  };


  /**
   * options
   * 
   */
  const options = {
    responsive: true
  }


  /**
   * States
   * 
   */
  const [data, setData] = useState<any>(initialData);


  /**
   * Effects
   * 
   */
  useEffect(() => {
    if (!values) return;

    setData((prev: any) => ({
      ...prev,
      labels,
      datasets: [
        {
          label: 'Napi maximum hőmérséklet',
          data: values,
          borderColor: 'rgb(255, 255, 255)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }
      ]
    }))
  }, [values, labels]);


  /**
   * renderChart
   * 
   * @returns 
   */
  const renderChart = () => {
    if (!values) {
      return <Text node="chart_load_failed" />
    }

    return (
      <ReactChart.Line
        data={data}
        options={options} />
    )
  }
  

  return (
    <div className={styles.container}>
      {renderChart()}
    </div>
  )
}

export default Chart;
