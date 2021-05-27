import { Images, images } from "@resources/res.images";
import { AppSettings, appSettings } from "@resources/res.settings";

interface Resources {
  images: Images;
  appSettings: AppSettings;
}

export const R: Resources = {
  images,
  appSettings,
};
