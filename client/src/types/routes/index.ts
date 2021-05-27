export interface NestedRoute {
  id: string;
  path: string;
  label?: string;
  component?:
    | React.ComponentClass<unknown>
    | React.ComponentClass<unknown, unknown>
    | React.FC<unknown>
    | JSX.Element;
  exact?: boolean;
  disable?: boolean;
  appBarElement?: boolean;
}

export interface Route {
  id: string;
  path: string;
  label?: string;
  component?:
    | React.ComponentClass<unknown>
    | React.ComponentClass<unknown, unknown>
    | React.FC<unknown>
    | JSX.Element;
  exact?: boolean;
  disable?: boolean;
  appBarElement?: boolean;
  nestedRoutes?: NestedRoute[];
}
