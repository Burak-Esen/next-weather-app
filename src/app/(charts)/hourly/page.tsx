'use client';

import { useEffect, useState } from 'react';

import { getLocation } from '@/integrations/ipapi'
import { getHourlyWeatherData } from '@/integrations/openmeteo'
import BarChart from '@/components/BarChart';


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

  const labels: string[] = data.hourly.time.slice(0, 24).map((t: string) =>
    t.split('T')[1].slice(0, 5)
  )
  return (
    <div className="bg-white mt-6 p-8 rounded-3xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6">
        Hourly Forecast
      </h1>
      <BarChart
        data={[data.hourly.temperature_2m.slice(0, 24)]}
        labels={labels}
        titles={["Temperature"]}
      />
    </div>
  );
}
