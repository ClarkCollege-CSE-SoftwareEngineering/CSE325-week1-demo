import { describe, it, expect } from 'vitest';
import { celsiusToFahrenheit, fahrenheitToCelsius, isFreezing } from './temperature';

describe('temperature conversions', () => {
  describe('celsiusToFahrenheit', () => {
    it('converts freezing point (0°C = 32°F)', () => {
      // Arrange
      const celsius = 0;

      // Act
      const result = celsiusToFahrenheit(celsius);

      // Assert
      expect(result).toBe(32);
    });

    it('converts boiling point (100°C = 212°F)', () => {
      expect(celsiusToFahrenheit(100)).toBe(212);
    });

    it('converts negative temperatures', () => {
      expect(celsiusToFahrenheit(-40)).toBe(-40); // Fun fact: -40 is the same in both!
    });

    it('converts room temperature (20°C = 68°F)', () => {
      expect(celsiusToFahrenheit(20)).toBe(68);
    });
  });

  describe('fahrenheitToCelsius', () => {
    it('converts freezing point (32°F = 0°C)', () => {
      expect(fahrenheitToCelsius(32)).toBe(0);
    });

    it('converts boiling point (212°F = 100°C)', () => {
      expect(fahrenheitToCelsius(212)).toBe(100);
    });

    it('converts body temperature (98.6°F ≈ 37°C)', () => {
      const result = fahrenheitToCelsius(98.6);
      expect(result).toBeCloseTo(37, 1); // Close to 37, within 1 decimal
    });
  });

  describe('isFreezing', () => {
    it('returns true for 0°C', () => {
      expect(isFreezing(0)).toBe(true);
    });

    it('returns true for negative temperatures', () => {
      expect(isFreezing(-10)).toBe(true);
    });

    it('returns false for temperatures above freezing', () => {
      expect(isFreezing(1)).toBe(false);
    });
  });
});
