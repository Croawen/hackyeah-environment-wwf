import { Controller, Get, Inject, Query, UsePipes, ValidationPipe, Post, Response, Body, HttpCode } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiUseTags, ApiImplicitQuery } from "@nestjs/swagger";
import { SearchLocationDto } from "../dto/search-location.dto";
import { SearchedLocationDto } from "../dto/searched-location.dto";
import { LocationService } from "../services/location.service";
import { ReportType } from "../../report/enum/report-type.enum";
import { GetSuggestedOrganizationsDto } from "../dto/get-suggested-organizations.dto";
import { sampleLocationsByType } from "../data/sample-locations-by.type";

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

  @Get()
  @ApiOperation({ title: "Get example organizations to report your issue to." })
  @ApiOkResponse({ type: GetSuggestedOrganizationsDto })
  @ApiBadRequestResponse({ description: "Invalid data provided" })
  @ApiImplicitQuery({ name: "type", type: String, enum: Object.values(ReportType) })
  async getExampleLocationsForType(@Query("type") type: ReportType): Promise<GetSuggestedOrganizationsDto> {
    const data = sampleLocationsByType[type] ? sampleLocationsByType[type] : [];
    return new GetSuggestedOrganizationsDto(data);
  }
}
