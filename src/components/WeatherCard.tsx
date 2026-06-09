'use client'

type Props = {
  city: string;
  temperature: number;
  windSpeed: number;
}

export default function WeatherCard({
  city,
  temperature,
  windSpeed
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <span className="text-xl font-semibold">Location</span>
      <div className="mb-3 text-slate-600">{city}</div>

      <h2 className="text-xl font-semibold mb-2">
        Current Temperature
      </h2>
      <h2 className="text-5xl font-bold text-sky-600">
        {temperature}°
      </h2>

      <p className="mt-3 text-slate-600">
        Wind: {windSpeed} km/h
      </p>
    </div>
  );
};

