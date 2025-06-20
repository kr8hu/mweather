export interface IMeteoForecast {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: ICurrentUnits;
  current: ICurrentWeather;
  daily_units: IDailyUnits;
  daily: IDailyWeather;
}

export interface ICurrentUnits {
  time: string; 
  interval: string; 
  temperature_2m: string;
  weather_code: string;
}

export interface ICurrentWeather {
  time: string; 
  interval: number; 
  temperature_2m: number;
  weather_code: number;
}

export interface IDailyUnits {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  precipitation_probability_max: string;
}

export interface IDailyWeather {
  time: string[]; 
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_probability_max: number[];
}