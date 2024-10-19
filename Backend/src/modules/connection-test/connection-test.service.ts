import { Injectable } from "@nestjs/common";
// import { ConnectionTestRepository } from "./connection-test.repository";
import { api } from "../../service/api";

@Injectable()
export class ConnectionTestService {
  // constructor(private repository: ConnectionTestRepository) {}

  async getCountries() {
    const response = await api.get("https://date.nager.at/api/v3/AvailableCountries");
    return response.data;
  }

  async getCountryInfo(countryCode: string) {
    const response = await api.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
    return response.data;
  }

  async getCountryPopulation() {
    const response = await api.get(`https://countriesnow.space/api/v0.1/countries/population`);
    return response.data;
  }

  async getFlagUrl() {
    const response = await api.get(`https://countriesnow.space/api/v0.1/countries/flag/images`);
    return response.data;
  }

  async getAllCountryInfos(countryCode: string) {
    const country = await this.getCountryInfo(countryCode);
    const countryPopulationData = await this.getCountryPopulation();
    const countryPopulationQuantity = countryPopulationData.data.find((population) => population.name === country.name);

    const countryFlagResponse = await this.getFlagUrl();

    const countryFlag = countryFlagResponse.data.find((flag) => flag.name === country.commonName);

    return {
      countryInfo: country,
      population: countryPopulationQuantity ? countryPopulationQuantity.populationCounts : [],
      flag: countryFlag ? countryFlag.flag : null,
    };
  }
}
