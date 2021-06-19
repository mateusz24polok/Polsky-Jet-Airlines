import { R } from "@resources/res";

export const getAirportFallbackImageOnImgError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
) => {
  event.currentTarget.src = R.images.fallback.AirportFallbackPhoto;
};

export const getWeatherFallbackIconOnImgError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
) => {
  event.currentTarget.src = R.images.fallback.WeatherFallbackIcon;
};
