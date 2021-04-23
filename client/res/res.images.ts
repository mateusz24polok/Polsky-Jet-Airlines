import FlightSearchEngineSectionBackground from "./images/flight_search_engine_background.jpg";

import LogoFullBig from "./images/logo/full_logo_big.png";
import LogoFullSmall from "./images/logo/full_logo_small.png";
import ImageLogo from "./images/logo/image_logo.png";
import SignLogo from "./images/logo/sign_logo.png";

import BerlinPhoto from "./images/cities/Berlin.jpg";
import BrusselsPhoto from "./images/cities/Brussels.jpg";
import LondonPhoto from "./images/cities/London.jpg";
import MilanPhoto from "./images/cities/Milan.jpg";
import OsloPhoto from "./images/cities/Oslo.jpg";
import ParisPhoto from "./images/cities/Paris.jpg";

export interface Images {
  backgrounds: {
    readonly FlightSearchEngineSectionBackground: string;
  };
  logo: {
    readonly LogoFullBig: string;
    readonly LogoFullSmall: string;
    readonly ImageLogo: string;
    readonly SignLogo: string;
  };
  cities: {
    readonly BerlinPhoto: string;
    readonly BrusselsPhoto: string;
    readonly LondonPhoto: string;
    readonly MilanPhoto: string;
    readonly OsloPhoto: string;
    readonly ParisPhoto: string;
  };
}

export const images: Images = {
  backgrounds: { FlightSearchEngineSectionBackground },
  logo: {
    LogoFullBig,
    LogoFullSmall,
    ImageLogo,
    SignLogo,
  },
  cities: {
    BerlinPhoto,
    BrusselsPhoto,
    LondonPhoto,
    MilanPhoto,
    OsloPhoto,
    ParisPhoto,
  },
};
