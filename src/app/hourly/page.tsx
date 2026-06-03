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
import { getHourlyWeatherData } from '@/integrations/openmeteo'
import { chartColors } from '@/utils/constants'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function HourlyPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getLocation().then(async location => {
      const data = await getHourlyWeatherData(location)
      setData(data)
    })
  }, []);

  if (!data)
    return <div className="p-10">Loading...</div>;

  const chartData = {
    labels: data.hourly.time.slice(0, 24).map((t: string) =>
      t.split('T')[1].slice(0, 5)
    ),
    datasets: [
      {
        label: 'Temperature',
        data: data.hourly.temperature_2m.slice(0, 24),
        ...chartColors[0]
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
          Hourly Forecast
        </h1>

        <Bar data={chartData} />
      </div>

    </main>
  );
}
