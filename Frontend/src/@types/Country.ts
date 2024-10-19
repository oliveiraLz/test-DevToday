export type ApiGetCountries = {
  countryCode: string;
  name: string;
};

export type ApiGetCountry = {
  countryInfo: {
    commonName: string;
    countryCode: string;
    officialName: string;
    region: string;
    borders: {
      borders: null;
      commonName: string;
      countryCode: string;
      officialName: string;
      region: string;
    }[];
  };
  flag: string;
  population: {
    value: number;
    year: number;
  }[];
};
