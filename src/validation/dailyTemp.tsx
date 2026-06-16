import * as z from 'zod';

export const DailyTempValidation = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),
  current_units: z.object({
    time: z.string(),
    interval: z.string(),
    temperature_2m: z.string(),
    wind_speed_10m: z.string(),
  }),
  current: z.object({
    time: z.iso.datetime({ local: true }),
    interval: z.number(),
    temperature_2m: z.number(),
    wind_speed_10m: z.number(),
  }),
  hourly_units: z.object({
    time: z.string(),
    temperature_2m: z.string(),
  }),
  hourly: z.object({
    time: z.array(z.iso.datetime({ local: true })),
    temperature_2m: z.array(z.number())
  }),
});

export type DailyTemp = z.infer<typeof DailyTempValidation>;


