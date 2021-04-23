import LogoFullBig from "./images/logo/full_logo_big.png";
import LogoFullSmall from "./images/logo/full_logo_small.png";
import ImageLogo from "./images/logo/image_logo.png";
import SignLogo from "./images/logo/sign_logo.png";
import FlightSearchEngineBackground from "./images/flight_search_engine_background.jpg";

export interface Images {
  readonly LogoFullBig: string;
  readonly LogoFullSmall: string;
  readonly ImageLogo: string;
  readonly SignLogo: string;
  readonly FlightSearchEngineBackground: string;
}

export const images: Images = {
  LogoFullBig,
  LogoFullSmall,
  ImageLogo,
  SignLogo,
  FlightSearchEngineBackground,
};
