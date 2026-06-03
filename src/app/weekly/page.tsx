'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { getLocation } from '@/integrations/ipapi'
import { getWeeklyWeatherData } from '@/integrations/openmeteo'
import { chartColors } from '@/utils/constants'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function WeeklyPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getLocation().then(async location => {
      const data = await getWeeklyWeatherData(location)
      setData(data)
    })
  }, []);

  if (!data)
    return <div className="p-10">Loading...</div>;

  const chartData = {
    labels: data.daily.time,
    datasets: [
      {
        label: 'Max Temp',
        data: data.daily.temperature_2m_max,
        ...chartColors[0]
      },
      {
        label: 'Min Temp',
        data: data.daily.temperature_2m_min,
        ...chartColors[1]
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 p-8">

      <Link href="/" className="text-sky-600">
        ← Dashboard
      </Link>

      <div className="bg-white mt-6 p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6">
          Weekly Forecast
        </h1>

        <Bar data={chartData} />
      </div>

    </main>
  );
}
