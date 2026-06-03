'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { getLocation } from '@/integrations/ipapi'
import { getDailyTemperatureData } from '@/integrations/openmeteo'
import { chartColors } from '@/utils/constants'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [city, setCity] = useState('')

  useEffect(() => {
    getLocation().then(async location => {
      setCity(location.city)
      const dailyTempData = await getDailyTemperatureData(location)
      setData(dailyTempData)
    })
  }, []);

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  const chartData = {
    labels: data.hourly.time.map((t: string) =>
      t.split('T')[1].slice(0, 5)
    ),
    datasets: [
      {
        label: 'Temperature',
        data: data.hourly.temperature_2m,
        ...chartColors[0]
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto p-8">

        <div className="mb-8">
          <h1 className="text-5xl font-bold text-slate-800">
            Daily Whether
          </h1>
          <span className="text-slate-500 mt-2">
            Powered by Open-Meteo
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <span className="text-xl font-semibold">Location</span>
            <div className="mb-3 text-slate-600">{city}</div>
            <h2 className="text-xl font-semibold mb-4">
              Current Temperature
            </h2>

            <div className="text-6xl font-bold text-sky-600">
              {data.current.temperature_2m}°
            </div>

            <div className="mt-3 text-slate-600">
              Wind: {data.current.wind_speed_10m} km/h
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-500 to-indigo-600 rounded-3xl p-8 text-white">
            <h2 className="text-xl font-semibold">
              Forecast Navigation
            </h2>

            <div className="flex gap-4 mt-6">
              <Link
                href="/hourly"
                className="bg-white/20 px-5 py-3 rounded-xl"
              >
                Hourly Forecast
              </Link>

              <Link
                href="/weekly"
                className="bg-white/20 px-5 py-3 rounded-xl"
              >
                Weekly Forecast
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Temperature Today
          </h2>

          <Line data={chartData} />
        </div>

      </div>
    </main>
  );
}