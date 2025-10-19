import { apiKey } from "./apiKey";

/**
 * Environment configuration object for the Weather Application.
 * 
 * Contains settings that vary between development and production environments.
 */
export const environment = {
  /**
   * Indicates whether the application is running in production mode.
   */
  production: false,

  /**
   * API key used to access the OpenWeatherMap API.
   * Defaults to a placeholder string if no key is provided in `apiKey`.
   */
  weatherApiKey: apiKey || "ADD_YOUR_API_KEY"
};
