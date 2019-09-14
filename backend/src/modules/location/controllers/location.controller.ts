import { Controller, Get, Inject, Query, UsePipes, ValidationPipe, Post, Response, Body, HttpCode } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { SearchLocationDto } from "../dto/search-location.dto";
import { SearchedLocationDto } from "../dto/searched-location.dto";
import { LocationService } from "../services/location.service";

@ApiUseTags("locations")
@Controller("locations")
export class LocationController {
  constructor(@Inject(LocationService) private readonly locationService: LocationService) {}

  @Post("search")
  @HttpCode(200)
  @ApiOperation({ title: "Search for closest location of specific type." })
  @ApiOkResponse({ type: SearchedLocationDto })
  @ApiBadRequestResponse({ description: "Invalid data provided." })
  async getClosestLocation(@Body() dto: SearchLocationDto): Promise<any> {
    return this.locationService.searchLocations(dto);
  }
}
