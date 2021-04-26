export interface Route {
  id: string;
  path: string;
  label?: string;
  component:
    | React.ComponentClass<unknown>
    | React.ComponentClass<unknown, any>
    | React.FC<any>
    | JSX.Element;
  exact?: boolean;
  disable?: boolean;
}
