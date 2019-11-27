interface Currencies {
  code: string;
  name: string;
  symbole: string;
}

interface Languages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Country {
  name: string;
  capital: string;
  population: number;
  flag: string;
  demonym: string;
  currencies: Currencies[];
  languages: Languages[];
}
