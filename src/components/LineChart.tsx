import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { chartColors } from '@/utils/constants'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

type Props = {
  data: number[][];
  labels: string[];
  titles: string[];
  // TODO: dataStatus: Loading, Error, Empty, Success
}

export default function LineChart({ data, labels, titles }: Props) {
  const chartData: ChartData = {
    labels,
    datasets: []
  };
  const mins: number[] = []
  const maxes: number[] = []
  data.forEach((d, i) => {
    mins.push(Math.min(...d))
    maxes.push(Math.max(...d))
    chartData.datasets.push({
      label: titles[i],
      data: d,
      pointHoverRadius: 6,
        pointHitRadius: 16,
        ...chartColors[i]
    })
  })
  
  const options = {
    scales: {
      y: {
        min: Math.round(Math.min(...mins) -2),
        max: Math.round(Math.max(...maxes) +2)
      }
    },
    responsive: true,
    interaction: {
      mode: 'nearest',
      intersect: false,
    },
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
  }
  return (
    <Line options={options} data={chartData} />
  );
};
