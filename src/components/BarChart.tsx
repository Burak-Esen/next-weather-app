import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { chartColors } from '@/utils/constants'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

type Props = {
  data: number[][];
  labels: string[];
  titles: string[];
  // TODO: dataStatus: Loading, Error, Empty, Success
}

export default function BarChart({ data, labels, titles }: Props) {
  const chartData: ChartData<'bar'> = {
    labels,
    datasets: []
  };
  data.forEach((d, i) => {
    chartData.datasets.push({
      label: titles[i],
      data: d,
        ...chartColors[i]
    })
  })
  
  return (
    <Bar data={chartData} />
  );
};
