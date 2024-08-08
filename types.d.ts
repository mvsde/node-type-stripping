export interface Country {
  name: string;
  population: number;
  area: number;
}

export type Countries = Map<string, Country>;
