import { Controller, Get, Inject, Param, Query } from "@nestjs/common";
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { PagerRequestDto, ParsePagerRequestPipe } from "../../../common/pager";
import { GetLocationListDto } from "../dto/admin/get-location-list.dto";
import { GetLocationDto } from "../dto/admin/get-location.dto";
import { AdminLocationService } from "../services/admin-location.service";

@ApiUseTags("admin-locations")
@Controller("admin-locations")
export class AdminLocationController {
  constructor(@Inject(AdminLocationService) private readonly adminLocationService: AdminLocationService) {}

  @Get()
  @ApiOperation({ title: "Get paged list of locations." })
  @ApiOkResponse({ type: GetLocationListDto })
  async getReportsList(@Query(new ParsePagerRequestPipe()) query: PagerRequestDto): Promise<GetLocationListDto> {
    return this.adminLocationService.getList(query);
  }

  @Get(":id")
  @ApiOperation({ title: "Get single location by id." })
  @ApiOkResponse({})
  @ApiNotFoundResponse({ description: "Location with provided id was not found." })
  async getReportById(@Param("id") locationId: string): Promise<GetLocationDto> {
    return this.adminLocationService.getById(locationId);
  }
}
