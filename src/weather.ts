import { celsiusToFahrenheit, isFreezing } from './temperature';

export interface WeatherData {
  city: string;
  temperatureCelsius: number;
  conditions: string;
}

/**
 * Formats a weather report string with both Celsius and Fahrenheit.
 */
export function formatWeatherReport(city: string, tempCelsius: number): string {
  const tempF = celsiusToFahrenheit(tempCelsius);
  return `${city}: ${tempCelsius}°C (${tempF}°F)`;
}

/**
 * Generates a weather advisory based on temperature.
 */
export function getWeatherAdvisory(tempCelsius: number): string {
  if (isFreezing(tempCelsius)) {
    return 'Warning: Freezing conditions. Watch for ice.';
  }
  if (tempCelsius > 35) {
    return 'Warning: Extreme heat. Stay hydrated.';
  }
  return 'Conditions are moderate.';
}

/**
 * Processes multiple weather reports.
 */
export function formatMultipleReports(dataList: WeatherData[]): string[] {
  return dataList.map((data) => formatWeatherReport(data.city, data.temperatureCelsius));
}
