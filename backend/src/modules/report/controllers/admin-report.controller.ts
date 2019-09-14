import { Controller, Get, Inject, Param, Query } from "@nestjs/common";
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { PagerRequestDto, ParsePagerRequestPipe } from "../../../common/pager";
import { GetReportListDto } from "../dto/admin/get-report-list.dto";
import { GetReportDto } from "../dto/admin/get-report.dto";
import { AdminReportService } from "../services/admin-report.service";

@ApiUseTags("admin-reports")
@Controller("admin-reports")
export class AdminReportController {
  constructor(@Inject(AdminReportService) private readonly adminReportService: AdminReportService) {}

  @Get()
  @ApiOperation({ title: "Get paged list of reports." })
  @ApiOkResponse({ type: GetReportListDto })
  async getReportsList(@Query(new ParsePagerRequestPipe()) query: PagerRequestDto): Promise<GetReportListDto> {
    return this.adminReportService.getList(query);
  }

  @Get(":id")
  @ApiOperation({ title: "Get single report by id." })
  @ApiOkResponse({})
  @ApiNotFoundResponse({ description: "Report with provided id was not found." })
  async getReportById(@Param("id") reportId: string): Promise<GetReportDto> {
    return this.adminReportService.getById(reportId);
  }
}
