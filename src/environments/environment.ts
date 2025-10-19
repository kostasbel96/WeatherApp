import { apiKey } from "./apiKey";

export const environment = {
  production: false,
  weatherApiKey: apiKey || "ADD_YOUR_API_KEY"
};