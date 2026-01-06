/**
 * Converts a temperature from Celsius to Fahrenheit.
 * Formula: (C × 9/5) + 32 = F
 */
export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

/**
 * Converts a temperature from Fahrenheit to Celsius.
 * Formula: (F − 32) × 5/9 = C
 */
export function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

/**
 * Determines if a temperature (in Celsius) is freezing.
 */
export function isFreezing(celsius: number): boolean {
  return celsius <= 0;
}
