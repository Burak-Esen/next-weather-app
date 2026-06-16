import * as z from 'zod';

export const HourlyWeatherValidation = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),
  hourly_units: z.object({
    time: z.string(),
    temperature_2m: z.string(),
    relative_humidity_2m: z.string(),
  }),
  hourly: z.object({
    time: z.array(z.iso.datetime({ local: true })),
    temperature_2m: z.array(z.number()),
    relative_humidity_2m: z.array(z.number()),
  }),
});

export type HourlyWeather = z.infer<typeof HourlyWeatherValidation>;
