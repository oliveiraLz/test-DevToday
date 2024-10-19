import { ReturnBordersDto } from "./return-borders.dto";
import { ReturnCountryPopulationDto } from "./return-country-population.dto";

export class ReturnCountriesInfoDto {
  borders: ReturnBordersDto;
  population: ReturnCountryPopulationDto;
  flag: string;

  constructor(borders: ReturnBordersDto, population: ReturnCountryPopulationDto, flag: string) {
    (this.borders = borders), (this.population = population), (this.flag = flag);
  }
}
