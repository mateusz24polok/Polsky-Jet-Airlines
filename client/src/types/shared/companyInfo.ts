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
