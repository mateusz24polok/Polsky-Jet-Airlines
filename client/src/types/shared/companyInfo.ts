import { Image } from "@appTypes/shared/image";

export interface FeatureInfoDetail {
  id: number;
  icon: Image;
  amount: number;
  info: string;
}

export interface AboutUs {
  title: string;
  primaryInfo: string;
  featureInfoDetails: FeatureInfoDetail[];
}

export interface Contact {
  brandName: string;
  city: string;
  street: string;
  phoneNumber: string;
  email: string;
  brandLogo: Image;
}

export interface Customer {
  id: number;
  name: string;
  residenceCity: string;
  icon: Image;
  opinion: string;
}
