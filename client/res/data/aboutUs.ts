import { R } from "../res";

interface FeatureInfoDetail {
  icon: string;
  amount: number;
  info: string;
}

interface AboutUs {
  title: string;
  primaryInfo: string;
  featureInfoDetails: FeatureInfoDetail[];
}

export const aboutUs: AboutUs = {
  title: "O nas",
  primaryInfo:
    "Jesteśmy małą firmą z wielkimi ambicjami. Od 2010 roku zajmujemy się organizacją lotów do wielu państw europojeskich. Posiadmy 5 własnych samolotów marki Boening. Dzięki temu, że wszystko ogranizujemy sami, bez pośredników nasze loty są najwyższej jakości, a ceny najniższe na rynku. Gwarantujemy 100% satysfakcji. Sprawdź co mówią o nas nasi klienci.",
  featureInfoDetails: [
    {
      amount: 500,
      info: "szczęśliwych lotów",
      icon: R.images.feautreIcons.Flight,
    },
    {
      amount: 100000,
      info: "sprzedanych biletów",
      icon: R.images.feautreIcons.Tickets,
    },
    {
      amount: 50000,
      info: "zadowolonych klientów",
      icon: R.images.feautreIcons.Customers,
    },
    {
      amount: 20,
      info: "miast do których latamy",
      icon: R.images.feautreIcons.Places,
    },
    {
      amount: 5,
      info: "najwyższej klasy samolotów",
      icon: R.images.feautreIcons.Airplanes,
    },
    {
      amount: 200,
      info: "zatrudnionych pracowników",
      icon: R.images.feautreIcons.Workers,
    },
  ],
};
