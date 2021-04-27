import { R } from "@resources/res";
import { Customer } from "@appTypes/shared/companyInfo";

export const customers: Customer[] = [
  {
    id: 0,
    name: "Andrzej",
    residenceCity: "Wrocław",
    icon: R.images.customersIcons.Andrzej,
    opinion:
      "Do pierwszego lotu z Polsky Jet zachęciła mnie niska cena lotu do Londynu. Dzisiaj już wiem, że niska cena w przypadku Polsky Jet to tylko wierzchołek góry lodowej. Korzystając z usług Polsky Jet dostajemy niesamowitą jakość za śmiesznie niską cenę.",
  },
  {
    id: 1,
    name: "Zbyszek",
    residenceCity: "Katowice",
    icon: R.images.customersIcons.Zbyszek,
    opinion:
      "Polsky Jet to zawsze rzetelne usługi lotów, z świetną obsługą i najniższymi cenami na rynku. Korzystam z ich usług od lat i nigdy się nie zawiodłem.",
  },
  {
    id: 2,
    name: "Ewa",
    residenceCity: "Gliwice",
    icon: R.images.customersIcons.Ewa,
    opinion:
      "Polsky Jet to totalne zaskoczenie na rynku przewoźników lotniczych. Przeglądałem wiele ofert i nikt nigdy nie zaoferuje Ci tak niskiej ceny, w zamian nie zapominając o solidnej jakości i świetnej obsłudze.",
  },
];
