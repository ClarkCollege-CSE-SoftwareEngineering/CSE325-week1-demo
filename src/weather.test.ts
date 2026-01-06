import { describe, it, expect } from 'vitest';
import { formatWeatherReport, getWeatherAdvisory, formatMultipleReports } from './weather';

describe('weather service', () => {
  describe('formatWeatherReport', () => {
    it('formats a weather report with both temperature units', () => {
      // This is an INTEGRATION test - it uses the real celsiusToFahrenheit function
      const result = formatWeatherReport('Seattle', 20);

      expect(result).toBe('Seattle: 20°C (68°F)');
    });

    it('handles freezing temperatures', () => {
      const result = formatWeatherReport('Anchorage', -5);

      expect(result).toBe('Anchorage: -5°C (23°F)');
    });

    it('handles hot temperatures', () => {
      const result = formatWeatherReport('Phoenix', 40);

      expect(result).toBe('Phoenix: 40°C (104°F)');
    });
  });

  describe('getWeatherAdvisory', () => {
    it('returns freezing warning for 0°C', () => {
      expect(getWeatherAdvisory(0)).toBe('Warning: Freezing conditions. Watch for ice.');
    });

    it('returns freezing warning for negative temps', () => {
      expect(getWeatherAdvisory(-15)).toBe('Warning: Freezing conditions. Watch for ice.');
    });

    it('returns heat warning for extreme heat', () => {
      expect(getWeatherAdvisory(40)).toBe('Warning: Extreme heat. Stay hydrated.');
    });

    it('returns moderate message for normal temps', () => {
      expect(getWeatherAdvisory(20)).toBe('Conditions are moderate.');
    });
  });

  describe('formatMultipleReports', () => {
    it('formats multiple weather reports', () => {
      const data = [
        { city: 'Seattle', temperatureCelsius: 15, conditions: 'Cloudy' },
        { city: 'Portland', temperatureCelsius: 18, conditions: 'Sunny' },
      ];

      const results = formatMultipleReports(data);

      expect(results).toHaveLength(2);
      expect(results[0]).toBe('Seattle: 15°C (59°F)');
      expect(results[1]).toBe('Portland: 18°C (64.4°F)');
    });

    it('returns empty array for empty input', () => {
      expect(formatMultipleReports([])).toEqual([]);
    });
  });
});
