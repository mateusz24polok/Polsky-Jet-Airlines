export interface Coord {
  lon: number;
  lat: number;
}

export interface WeatherMain {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Wind {
  deg: number;
  gust: number;
  speed: number;
}

export interface WeatherResponse {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: Coord;
  dt: number;
  it: number;
  main: WeatherMain;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

export interface FlightCitiesWeatherResponse {
  startingCityWeather: WeatherResponse;
  destinationCityWeather: WeatherResponse;
}

export interface FlightCitiesWeatherResponseWithFlightId
  extends FlightCitiesWeatherResponse {
  id: string;
}
