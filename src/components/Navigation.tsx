// main navigation should be here

// nav menu

// current place
// or tab-system
import Link from 'next/link';

export default function WeatherCard() {
  return (
    <div className="p-2 text-sky-700">
        {/* <h2 className="text-xl font-semibold">
            Forecast Navigation
        </h2> */}

        <div className="flex gap-4">
            <Link
                href="/hourly"
                className="bg-gradient-to-br from-sky-200 to-indigo-300 px-5 py-3 rounded-xl"
            >
                Hourly Forecast
            </Link>

            <Link
                href="/weekly"
                className="bg-gradient-to-br from-sky-200 to-indigo-300 px-5 py-3 rounded-xl"
            >
                Weekly Forecast
            </Link>
        </div>
    </div>
  );
};
