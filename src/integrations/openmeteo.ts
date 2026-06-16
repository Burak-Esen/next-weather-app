import { DailyTemp, DailyTempValidation } from '@/validation/dailyTemp'
import { HourlyWeather, HourlyWeatherValidation } from '@/validation/hourlyWeather'
import { WeeklyWeather, WeeklyWeatherValidation } from '@/validation/weeklyWeather'

// Dummy data for dev
const dummyDailyTemperature = {
    "latitude": 53.211998,
    "longitude": 5.7999997,
    "generationtime_ms": 0.05829334259033203,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 5.0,
    "current_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature_2m": "°C",
        "wind_speed_10m": "km/h"
    },
    "current": {
        "time": "2026-06-03T01:45",
        "interval": 900,
        "temperature_2m": 14.1,
        "wind_speed_10m": 14.8
    },
    "hourly_units": {
        "time": "iso8601",
        "temperature_2m": "°C"
    },
    "hourly": {
        "time": [
            "2026-06-03T00:00",
            "2026-06-03T01:00",
            "2026-06-03T02:00",
            "2026-06-03T03:00",
            "2026-06-03T04:00",
            "2026-06-03T05:00",
            "2026-06-03T06:00",
            "2026-06-03T07:00",
            "2026-06-03T08:00",
            "2026-06-03T09:00",
            "2026-06-03T10:00",
            "2026-06-03T11:00",
            "2026-06-03T12:00",
            "2026-06-03T13:00",
            "2026-06-03T14:00",
            "2026-06-03T15:00",
            "2026-06-03T16:00",
            "2026-06-03T17:00",
            "2026-06-03T18:00",
            "2026-06-03T19:00",
            "2026-06-03T20:00",
            "2026-06-03T21:00",
            "2026-06-03T22:00",
            "2026-06-03T23:00"
        ],
        "temperature_2m": [
            15.0,
            14.3,
            14.1,
            14.6,
            14.8,
            15.0,
            15.4,
            16.1,
            16.8,
            15.7,
            16.9,
            18.8,
            19.3,
            19.4,
            17.2,
            17.1,
            16.5,
            16.2,
            15.7,
            15.0,
            14.1,
            14.5,
            14.7,
            14.5
        ]
    }
}

const dummyHourlyWeather = {
  "latitude": 51.574,
  "longitude": 4.785,
  "generationtime_ms": 0.187158584594727,
  "utc_offset_seconds": 0,
  "timezone": "GMT",
  "timezone_abbreviation": "GMT",
  "elevation": 7,
  "hourly_units": {
    "time": "iso8601",
    "temperature_2m": "°C",
    "relative_humidity_2m": "%"
  },
  "hourly": {
    "time": [
      "2026-06-03T00:00",
      "2026-06-03T01:00",
      "2026-06-03T02:00",
      "2026-06-03T03:00",
      "2026-06-03T04:00",
      "2026-06-03T05:00",
      "2026-06-03T06:00",
      "2026-06-03T07:00",
      "2026-06-03T08:00",
      "2026-06-03T09:00",
      "2026-06-03T10:00",
      "2026-06-03T11:00",
      "2026-06-03T12:00",
      "2026-06-03T13:00",
      "2026-06-03T14:00",
      "2026-06-03T15:00",
      "2026-06-03T16:00",
      "2026-06-03T17:00",
      "2026-06-03T18:00",
      "2026-06-03T19:00",
      "2026-06-03T20:00",
      "2026-06-03T21:00",
      "2026-06-03T22:00",
      "2026-06-03T23:00",
      "2026-06-04T00:00",
      "2026-06-04T01:00",
      "2026-06-04T02:00",
      "2026-06-04T03:00",
      "2026-06-04T04:00",
      "2026-06-04T05:00",
      "2026-06-04T06:00",
      "2026-06-04T07:00",
      "2026-06-04T08:00",
      "2026-06-04T09:00",
      "2026-06-04T10:00",
      "2026-06-04T11:00",
      "2026-06-04T12:00",
      "2026-06-04T13:00",
      "2026-06-04T14:00",
      "2026-06-04T15:00",
      "2026-06-04T16:00",
      "2026-06-04T17:00",
      "2026-06-04T18:00",
      "2026-06-04T19:00",
      "2026-06-04T20:00",
      "2026-06-04T21:00",
      "2026-06-04T22:00",
      "2026-06-04T23:00",
      "2026-06-05T00:00",
      "2026-06-05T01:00",
      "2026-06-05T02:00",
      "2026-06-05T03:00",
      "2026-06-05T04:00",
      "2026-06-05T05:00",
      "2026-06-05T06:00",
      "2026-06-05T07:00",
      "2026-06-05T08:00",
      "2026-06-05T09:00",
      "2026-06-05T10:00",
      "2026-06-05T11:00",
      "2026-06-05T12:00",
      "2026-06-05T13:00",
      "2026-06-05T14:00",
      "2026-06-05T15:00",
      "2026-06-05T16:00",
      "2026-06-05T17:00",
      "2026-06-05T18:00",
      "2026-06-05T19:00",
      "2026-06-05T20:00",
      "2026-06-05T21:00",
      "2026-06-05T22:00",
      "2026-06-05T23:00",
      "2026-06-06T00:00",
      "2026-06-06T01:00",
      "2026-06-06T02:00",
      "2026-06-06T03:00",
      "2026-06-06T04:00",
      "2026-06-06T05:00",
      "2026-06-06T06:00",
      "2026-06-06T07:00",
      "2026-06-06T08:00",
      "2026-06-06T09:00",
      "2026-06-06T10:00",
      "2026-06-06T11:00",
      "2026-06-06T12:00",
      "2026-06-06T13:00",
      "2026-06-06T14:00",
      "2026-06-06T15:00",
      "2026-06-06T16:00",
      "2026-06-06T17:00",
      "2026-06-06T18:00",
      "2026-06-06T19:00",
      "2026-06-06T20:00",
      "2026-06-06T21:00",
      "2026-06-06T22:00",
      "2026-06-06T23:00",
      "2026-06-07T00:00",
      "2026-06-07T01:00",
      "2026-06-07T02:00",
      "2026-06-07T03:00",
      "2026-06-07T04:00",
      "2026-06-07T05:00",
      "2026-06-07T06:00",
      "2026-06-07T07:00",
      "2026-06-07T08:00",
      "2026-06-07T09:00",
      "2026-06-07T10:00",
      "2026-06-07T11:00",
      "2026-06-07T12:00",
      "2026-06-07T13:00",
      "2026-06-07T14:00",
      "2026-06-07T15:00",
      "2026-06-07T16:00",
      "2026-06-07T17:00",
      "2026-06-07T18:00",
      "2026-06-07T19:00",
      "2026-06-07T20:00",
      "2026-06-07T21:00",
      "2026-06-07T22:00",
      "2026-06-07T23:00",
      "2026-06-08T00:00",
      "2026-06-08T01:00",
      "2026-06-08T02:00",
      "2026-06-08T03:00",
      "2026-06-08T04:00",
      "2026-06-08T05:00",
      "2026-06-08T06:00",
      "2026-06-08T07:00",
      "2026-06-08T08:00",
      "2026-06-08T09:00",
      "2026-06-08T10:00",
      "2026-06-08T11:00",
      "2026-06-08T12:00",
      "2026-06-08T13:00",
      "2026-06-08T14:00",
      "2026-06-08T15:00",
      "2026-06-08T16:00",
      "2026-06-08T17:00",
      "2026-06-08T18:00",
      "2026-06-08T19:00",
      "2026-06-08T20:00",
      "2026-06-08T21:00",
      "2026-06-08T22:00",
      "2026-06-08T23:00",
      "2026-06-09T00:00",
      "2026-06-09T01:00",
      "2026-06-09T02:00",
      "2026-06-09T03:00",
      "2026-06-09T04:00",
      "2026-06-09T05:00",
      "2026-06-09T06:00",
      "2026-06-09T07:00",
      "2026-06-09T08:00",
      "2026-06-09T09:00",
      "2026-06-09T10:00",
      "2026-06-09T11:00",
      "2026-06-09T12:00",
      "2026-06-09T13:00",
      "2026-06-09T14:00",
      "2026-06-09T15:00",
      "2026-06-09T16:00",
      "2026-06-09T17:00",
      "2026-06-09T18:00",
      "2026-06-09T19:00",
      "2026-06-09T20:00",
      "2026-06-09T21:00",
      "2026-06-09T22:00",
      "2026-06-09T23:00"
    ],
    "temperature_2m": [14.6, 14, 14.1, 14.3, 14, 14.2, 14.7, 15.9, 14.8, 15, 14.9, 16, 17.7, 16.7, 17.2, 16.6, 15.5, 14.9, 14.5, 14.2, 14.3, 14.6, 14.8, 14.9, 14.3, 14, 14, 13.9, 13.9, 14.2, 14.2, 14.5, 15.4, 15.9, 15.1, 16.8, 14.5, 16.8, 16.9, 17.4, 17.5, 16.5, 15.9, 15.5, 15.2, 15, 14, 13.5, 13, 13.2, 12.9, 12.9, 12.7, 12.9, 13.3, 14.1, 15.3, 16.3, 16, 18.3, 19, 18.4, 16.8, 16.5, 16.6, 16.5, 15.9, 15.1, 13.8, 12.9, 12.4, 11.9, 12.2, 11.6, 11.6, 11.9, 11.9, 12.6, 13.7, 14.8, 17.3, 18.5, 19, 19.2, 18.3, 18.2, 18, 17.9, 17.5, 17.1, 16.5, 15.9, 15.1, 14.2, 13.4, 12.6, 12, 11.4, 11, 10.9, 11.4, 12.1, 13.1, 14.1, 15.2, 16.4, 17.4, 18.4, 19.1, 19.5, 19.6, 19.6, 19.6, 19.5, 19.1, 18.1, 16.8, 15.7, 15.2, 15, 14.8, 14.4, 14.1, 13.9, 14.1, 14.5, 15.2, 16.4, 17.8, 19, 19.6, 20, 20.1, 19.8, 19.1, 18.5, 18.2, 18, 17.9, 15.1, 14.9, 14.6, 14.4, 14.3, 14.2, 14.1, 14.1, 14.1, 14.1, 14.2, 14.2, 14.2, 14.3, 14.3, 14.3, 14.4, 14.4, 14.6, 14.9, 15.2, 15.4, 15.6, 15.4, 14.9, 14.2, 13.3, 12.4, 11.6],
    "relative_humidity_2m": [84, 87, 88, 89, 94, 95, 93, 89, 93, 90, 89, 81, 75, 67, 68, 72, 85, 89, 90, 91, 93, 93, 94, 88, 85, 87, 88, 90, 91, 88, 89, 88, 83, 79, 84, 71, 84, 79, 70, 65, 63, 70, 73, 73, 74, 76, 87, 89, 92, 92, 92, 91, 93, 92, 91, 88, 80, 75, 73, 62, 58, 59, 64, 66, 64, 65, 66, 73, 78, 82, 87, 88, 87, 89, 88, 86, 87, 87, 85, 82, 71, 60, 53, 53, 60, 60, 60, 61, 66, 73, 79, 78, 75, 73, 73, 74, 75, 78, 81, 83, 83, 82, 80, 75, 69, 64, 59, 55, 53, 52, 53, 54, 56, 58, 61, 68, 77, 84, 86, 86, 85, 86, 87, 88, 89, 89, 86, 80, 73, 67, 64, 62, 62, 65, 70, 75, 77, 79, 80, 97, 98, 98, 98, 98, 98, 98, 98, 98, 98, 97, 97, 96, 96, 95, 94, 93, 90, 87, 83, 79, 75, 72, 71, 72, 75, 79, 83, 87]
  }
}

const dummyWeeklyWeatherData = {
  "latitude": 51.574,
  "longitude": 4.785,
  "generationtime_ms": 0.0461339950561523,
  "utc_offset_seconds": 0,
  "timezone": "GMT",
  "timezone_abbreviation": "GMT",
  "elevation": 7,
  "daily_units": {
    "time": "iso8601",
    "temperature_2m_max": "°C",
    "temperature_2m_min": "°C"
  },
  "daily": {
    "time": [
      "2026-06-03",
      "2026-06-04",
      "2026-06-05",
      "2026-06-06",
      "2026-06-07",
      "2026-06-08",
      "2026-06-09"
    ],
    "temperature_2m_max": [18.7, 17, 19.8, 18.1, 19, 21.6, 16.8],
    "temperature_2m_min": [13.7, 13.8, 11, 10.4, 12.5, 12.1, 10.6]
  }
}

type Location = {
    latitude: number;
    longitude: number;
}

// ! Dummy Data - todo
// export const getDailyTemperatureData: (location: Location) => Promise<DailyTemp | null> = async (location: Location) => {
//   const result = DailyTempValidation.safeParse(dummyDailyTemperature)
//   if (!result.success) {
//     console.error("openmeteo daily temperature validation error:")
//     console.error(result.error);
//     return null;
//   }
//   return result.data
// }
// export const getHourlyWeatherData: (location: Location) => Promise<HourlyWeather | null> = async (location: Location) => {
//     const res = HourlyWeatherValidation.safeParse(dummyHourlyWeather)
//     if (!res.success) {
//       console.error("openmeteo hourly weather validation error:")
//       console.error(res.error)
//       return null
//     }
//     return res.data
// }
// export const getWeeklyWeatherData: (location: Location) => Promise<WeeklyWeather | null> = async (location: Location) => {
//     const res = WeeklyWeatherValidation.safeParse(dummyWeeklyWeatherData)
//     if (!res.success) {
//       console.error("openmeteo hourly weather validation error:")
//       console.error(res.error)
//       return null
//     }
//     return res.data
// }

export const getDailyTemperatureData: (location: Location) => Promise<DailyTemp | null> = async (location: Location) => {
  const req = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m&forecast_days=1`)
  const data = await req.json()
  const result = DailyTempValidation.safeParse(data)
  if (!result.success) {
    console.error("openmeteo daily temperature validation error:")
    console.error(result.error);
    return null;
  }
  return result.data
}
export const getHourlyWeatherData: (location: Location) => Promise<HourlyWeather | null> = async (location: Location) => {
  const req = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,relative_humidity_2m`)
  const data = await req.json()
  const res = HourlyWeatherValidation.safeParse(data)
    if (!res.success) {
      console.error("openmeteo hourly weather validation error:")
      console.error(res.error)
      return null
    }
    return res.data
}
export const getWeeklyWeatherData: (location: Location) => Promise<WeeklyWeather | null> = async (location: Location) => {
    const req = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min&forecast_days=7`)
    const data = await req.json()
    const res = WeeklyWeatherValidation.safeParse(data)
    if (!res.success) {
      console.error("openmeteo hourly weather validation error:")
      console.error(res.error)
      return null
    }
    return res.data
}
