import { Image } from "@appTypes/shared/image";

import FlightSearchEngineSectionBackground from "@images/flight_search_engine_background.jpg";

import LogoFullBig from "@images/logo/full_logo_big.png";
import LogoFullSmall from "@images/logo/full_logo_small.png";
import ImageLogo from "@images/logo/image_logo.png";
import SignLogo from "@images/logo/sign_logo.png";

import BerlinPhoto from "@images/cities/Berlin.jpg";
import BrusselsPhoto from "@images/cities/Brussels.jpg";
import LondonPhoto from "@images/cities/London.jpg";
import MilanPhoto from "@images/cities/Milan.jpg";
import OsloPhoto from "@images/cities/Oslo.jpg";
import ParisPhoto from "@images/cities/Paris.jpg";

import FlightIcon from "@images/icons/featureIcons/Flight_Icon.png";
import AirplaneIcon from "@images/icons/featureIcons/Airplane_Icon.png";
import CitiesIcon from "@images/icons/featureIcons/Cities_Icon.png";
import TicketIcon from "@images/icons/featureIcons/Ticket_Icon.png";
import WorkersIcon from "@images/icons/featureIcons/Workers_Icon.png";
import CustomersIcon from "@images/icons/featureIcons/Client_Icon.png";

import ManIcon from "@images/icons/customersIcons/man_light_skin_tone_icon.png";
import MaNJudgeIcon from "@images/icons/customersIcons/man_judge_light_skin_tone_icon.png";
import WomanOfficeWorkerIcon from "@images/icons/customersIcons/woman_office_worker_icon.png";

import OpinionIcon from "@images/icons/opinion_icon.png";
import AirplaneIconBlack from "@images/icons/airplane_icon.png";
import RightArrowIcon from "@images/icons/right_arrow_icon.png";

export interface Images {
  backgrounds: {
    readonly FlightSearchEngineSectionBackground: Image;
  };
  logo: {
    readonly LogoFullBig: Image;
    readonly LogoFullSmall: Image;
    readonly ImageLogo: Image;
    readonly SignLogo: Image;
  };
  cities: {
    readonly BerlinPhoto: Image;
    readonly BrusselsPhoto: Image;
    readonly LondonPhoto: Image;
    readonly MilanPhoto: Image;
    readonly OsloPhoto: Image;
    readonly ParisPhoto: Image;
  };
  feautreIcons: {
    readonly Flight: Image;
    readonly Tickets: Image;
    readonly Places: Image;
    readonly Customers: Image;
    readonly Airplanes: Image;
    readonly Workers: Image;
  };
  customersIcons: {
    readonly Andrzej: Image;
    readonly Zbyszek: Image;
    readonly Ewa: Image;
  };
  utilIcons: {
    readonly OpinionIcon: Image;
    readonly AirplaneIconBlack: Image;
    readonly RightArrowIcon: Image;
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
    OpinionIcon,
    AirplaneIconBlack,
    RightArrowIcon,
  },
};
