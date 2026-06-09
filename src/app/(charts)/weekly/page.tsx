'use client';

import { useEffect, useState } from 'react';

import { getLocation } from '@/integrations/ipapi'
import { getWeeklyWeatherData } from '@/integrations/openmeteo'
import BarChart from '@/components/BarChart';


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

  return (
    <div className="bg-white mt-6 p-8 rounded-3xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6">
        Weekly Forecast
      </h1>

      <BarChart
        data={[data.daily.temperature_2m_max, data.daily.temperature_2m_min]}
        titles={['Max Temp', "Min Temp"]}
        labels={data.daily.time}
      />
    </div>
  );
}
