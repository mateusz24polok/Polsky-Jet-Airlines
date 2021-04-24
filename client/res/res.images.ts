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

import FlightIcon from "./images/icons/featureIcons/Flight_Icon.png";
import AirplaneIcon from "./images/icons/featureIcons/Airplane_Icon.png";
import CitiesIcon from "./images/icons/featureIcons/Cities_Icon.png";
import TicketIcon from "./images/icons/featureIcons/Ticket_Icon.png";
import WorkersIcon from "./images/icons/featureIcons/Workers_Icon.png";
import CustomersIcon from "./images/icons/featureIcons/Client_Icon.png";

import ManIcon from "./images/icons/customersIcons/man_light_skin_tone_icon.png";
import MaNJudgeIcon from "./images/icons/customersIcons/man_judge_light_skin_tone_icon.png";
import WomanOfficeWorkerIcon from "./images/icons/customersIcons/woman_office_worker_icon.png";

import OpionIcon from "./images/icons/opinion_icon.png";

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
  feautreIcons: {
    readonly Flight: string;
    readonly Tickets: string;
    readonly Places: string;
    readonly Customers: string;
    readonly Airplanes: string;
    readonly Workers: string;
  };
  customersIcons: {
    readonly Andrzej: string;
    readonly Zbyszek: string;
    readonly Ewa: string;
  };
  utilIcons: {
    readonly OpionIcon: string;
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
  feautreIcons: {
    Airplanes: AirplaneIcon,
    Customers: CustomersIcon,
    Flight: FlightIcon,
    Places: CitiesIcon,
    Tickets: TicketIcon,
    Workers: WorkersIcon,
  },
  customersIcons: {
    Andrzej: ManIcon,
    Zbyszek: MaNJudgeIcon,
    Ewa: WomanOfficeWorkerIcon,
  },
  utilIcons: {
    OpionIcon,
  },
};
