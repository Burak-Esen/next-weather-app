'use client';

import { useEffect, useState } from 'react';

import { getLocation } from '@/integrations/ipapi'
import { getDailyTemperatureData } from '@/integrations/openmeteo'
import WeatherCard from '@/components/WeatherCard';
import LineChart from '@/components/LineChart'

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
  const labels: string[] = data.hourly.time.map((t: string) =>
    t.split('T')[1].slice(0, 5)
  )

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <WeatherCard
          city={city}
          temperature={data.current.temperature_2m}
          windSpeed={data.current.wind_speed_10m}
        />

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Temperature Today
        </h2>

        <LineChart data={[data.hourly.temperature_2m]} labels={labels} titles={['Temperature']} />
      </div>

    </main>
  );
}