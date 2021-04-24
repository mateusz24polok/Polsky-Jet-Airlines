import { R } from "../res";

interface CustomerOpion {
  name: string;
  city: string;
  icon: string;
  opion: string;
}

export const customersOpinion: CustomerOpion[] = [
  {
    name: "Andrzej",
    city: "Wrocław",
    icon: R.images.customersIcons.Andrzej,
    opion:
      "Do pierwszego lotu z Polsky Jet zachęciła mnie niska cena lotu do Londynu. Dzisiaj już wiem, że niska cena w przypadku Polsky Jet to tylko wierzchołek góry lodowej. Korzystając z usług Polsky Jet dostajemy niesamowitą jakość za śmiesznie niską cenę.",
  },
  {
    name: "Zbyszek",
    city: "Katowice",
    icon: R.images.customersIcons.Zbyszek,
    opion:
      "Polsky Jet to zawsze rzetelne usługi lotów, z świetną obsługą i najniższymi cenami na rynku. Korzystam z ich usług od lat i nigdy się nie zawiodłem.",
  },
  {
    name: "Ewa",
    city: "Gliwice",
    icon: R.images.customersIcons.Ewa,
    opion:
      "Polsky Jet to totalne zaskoczenie na rynku przewoźników lotniczych. Przeglądałem wiele ofert i nikt nigdy nie zaoferuje Ci tak niskiej ceny, w zamian nie zapominając o solidnej jakości i świetnej obsłudze.",
  },
];
