import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from "@nestjs/common";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { PagerRequestDto, ParsePagerRequestPipe } from "../../../common/pager";
import { ParseObjectIdPipe } from "../../../common/pipes/parse-object-id.pipe";
import { GetLocationListDto } from "../dto/admin/get-location-list.dto";
import { GetLocationDto } from "../dto/admin/get-location.dto";
import { SaveLocationDto } from "../dto/admin/save-location.dto";
import { AdminLocationService } from "../services/admin-location.service";

@ApiUseTags("admin-locations")
@Controller("admin-locations")
export class AdminLocationController {
  constructor(@Inject(AdminLocationService) private readonly adminLocationService: AdminLocationService) {}

  @Get()
  @ApiOperation({ title: "Get paged list of locations." })
  @ApiOkResponse({ type: GetLocationListDto })
  async getLocationsList(@Query(new ParsePagerRequestPipe()) query: PagerRequestDto): Promise<GetLocationListDto> {
    return this.adminLocationService.getList(query);
  }

  @Get(":id")
  @ApiOperation({ title: "Get single location by id." })
  @ApiOkResponse({})
  @ApiNotFoundResponse({ description: "Location with provided id was not found." })
  async getLocationById(@Param("id", new ParseObjectIdPipe()) locationId: string): Promise<GetLocationDto> {
    return this.adminLocationService.getById(locationId);
  }

  @Post()
  @ApiOperation({ title: "Add new location." })
  @ApiCreatedResponse({ description: "New location added." })
  @ApiBadRequestResponse({ description: "Invalid data provided." })
  async saveNewLocation(@Body() dto: SaveLocationDto): Promise<void> {
    return this.adminLocationService.saveNewLocation(dto);
  }

  @Put(":id")
  @ApiOperation({ title: "Update existing location with provided id." })
  @ApiOkResponse({ description: "Location updated." })
  @ApiBadRequestResponse({ description: "Invalid data provided." })
  @ApiNotFoundResponse({ description: "Location with provided id was not found." })
  async updateExistingLocation(@Param("id", new ParseObjectIdPipe()) locationId: string, @Body() dto: SaveLocationDto): Promise<void> {
    return this.adminLocationService.updateExistingLocation(locationId, dto);
  }

  @Delete(":id")
  @ApiOperation({ title: "Delete existing location with provided id." })
  @ApiOkResponse({ description: "Location deleted." })
  @ApiNotFoundResponse({ description: "Location with provided id was not found." })
  async deleteLocation(@Param("id", new ParseObjectIdPipe()) locationId: string): Promise<void> {
    return this.adminLocationService.deleteLocation(locationId);
  }
}
