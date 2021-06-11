import { LogoutPage } from "@pages/LogoutPage";
import { store } from "@store/setupStore";
import { NestedRoute, Route } from "@appTypes/routes";

export const getNavRoutes = (routes: Route[]): Route[] =>
  routes.filter(route => route.appBarElement);

export const getManagementRoutes = (routes: Route[]): NestedRoute[] =>
  routes.filter(route => route.id === "management")[0].nestedRoutes || [];

export const getProtectedRoutesByRole = (routes: Route[]): Route[] => {
  const currentUserRole = store.getState().user.role;

  return routes.map(route => {
    if (
      !route.roleProtected ||
      (currentUserRole &&
        route.roleProtected &&
        route.roleProtected.includes(currentUserRole))
    ) {
      return route;
    } else {
      return {
        ...route,
        appBarElement: false,
        disable: true,
        component: LogoutPage,
      };
    }
  });
};
