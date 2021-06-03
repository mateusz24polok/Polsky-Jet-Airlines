import axios, { AxiosResponse } from "axios";
import { prepareQueryParamsURLFromObject } from "@utils/urlUtils";
import {
  FlightCitiesWeatherResponse,
  WeatherResponse,
} from "@appTypes/weather";

const openWeatherAxiosInstance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
});

export const getCityWeather = async (
  city: string,
): Promise<WeatherResponse> => {
  try {
    const url = prepareQueryParamsURLFromObject(
      { q: city, units: "metrics", appid: process.env.OPEN_WEATHER_API_KEY },
      `/weather`,
    );
    const request: AxiosResponse<WeatherResponse> = await openWeatherAxiosInstance.get(
      url,
    );
    return request.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const getFlightCitiesWeather = async (
  startingCity: string,
  destinationCity: string,
): Promise<FlightCitiesWeatherResponse> => {
  try {
    const [startingCityWeather, destinationCityWeather] = await Promise.all([
      getCityWeather(startingCity),
      getCityWeather(destinationCity),
    ]);

    return {
      startingCityWeather,
      destinationCityWeather,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
