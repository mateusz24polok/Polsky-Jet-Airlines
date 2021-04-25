import { R } from "../res";

interface Contact {
  brandName: string;
  city: string;
  street: string;
  phoneNumber: string;
  email: string;
  brandLogo: string;
}

export const ContactData: Contact = {
  brandName: "Polsky Jet",
  city: "Rybnik 44-200",
  street: "Ulicowa 32",
  phoneNumber: "+48 111 222 333",
  email: "kontakt@polskyjet.pl",
  brandLogo: R.images.logo.LogoFullSmall,
};
