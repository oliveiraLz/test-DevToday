import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiResponse } from "@nestjs/swagger";

import { ConnectionTestService } from "./connection-test.service";

@ApiTags("Connection Test")
@Controller("connection-test")
export class ConnectionTestController {
  constructor(private readonly connectionTestService: ConnectionTestService) {}

  @Get("countries")
  @ApiResponse({ status: 200, description: "List of available countries." })
  @ApiResponse({ status: 500, description: "Error fetching countries." })
  findAll() {
    return this.connectionTestService.getCountries();
  }

  // @Get("country-info/:countryCode")
  // @ApiResponse({ status: 200, description: "Country information retrieved successfully." })
  // @ApiResponse({ status: 404, description: "Country not found." })
  // @ApiResponse({ status: 500, description: "Error fetching country information." })
  // getCountryInfo(@Param("countryCode") countryCode: string) {
  //   return this.connectionTestService.getCountryInfo(countryCode);
  // }

  @Get("all-country-info/:countryCode")
  @ApiResponse({
    status: 200,
    description: "All country information retrieved successfully.",
  })
  @ApiResponse({ status: 404, description: "Country not found." })
  @ApiResponse({ status: 500, description: "Error fetching all country information." })
  getAllCountryInfos(@Param("countryCode") countryCode: string) {
    return this.connectionTestService.getAllCountryInfos(countryCode);
  }
}
