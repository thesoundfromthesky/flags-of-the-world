export interface NavItem {
    id: number;
    name: string;
    link: string[];
    active: string[];
    options: { exact: boolean };
  }
  