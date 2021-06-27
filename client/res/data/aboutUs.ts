import { R } from "@resources/res";
import { AboutUs } from "@appTypes/shared/companyInfo";

export const aboutUs: AboutUs = {
  title: "O nas",
  primaryInfo:
    "Jesteśmy małą firmą z wielkimi ambicjami. Od 2010 roku zajmujemy się organizacją lotów do wielu państw europojeskich. Posiadmy 5 własnych samolotów marki Boening. Dzięki temu, że wszystko ogranizujemy sami, bez pośredników nasze loty są najwyższej jakości, a ceny najniższe na rynku. Gwarantujemy 100% satysfakcji. Sprawdź co mówią o nas nasi klienci.",
  featureInfoDetails: [
    {
      id: 0,
      amount: 600,
      info: "szczęśliwych lotów",
      icon: R.images.feautreIcons.Flight,
    },
    {
      id: 1,
      amount: 100000,
      info: "sprzedanych biletów",
      icon: R.images.feautreIcons.Tickets,
    },
    {
      id: 2,
      amount: 50000,
      info: "zadowolonych klientów",
      icon: R.images.feautreIcons.Customers,
    },
    {
      id: 3,
      amount: 20,
      info: "miast do których latamy",
      icon: R.images.feautreIcons.Places,
    },
    {
      id: 4,
      amount: 5,
      info: "najwyższej klasy samolotów",
      icon: R.images.feautreIcons.Airplanes,
    },
    {
      id: 5,
      amount: 200,
      info: "zatrudnionych pracowników",
      icon: R.images.feautreIcons.Workers,
    },
  ],
};
