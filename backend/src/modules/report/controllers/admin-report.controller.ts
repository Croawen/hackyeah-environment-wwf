import { Controller, Get, Inject, Param, Query } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";
import { PagerRequestDto, ParsePagerRequestPipe } from "../../../common/pager";
import { GetReportListDto } from "../dto/get-report-list.dto";
import { GetReportDto } from "../dto/get-report.dto";
import { AdminReportService } from "../services/admin-report.service";

@ApiUseTags("admin-reports")
@Controller("admin-reports")
export class AdminReportController {
  constructor(@Inject(AdminReportService) private readonly adminReportService: AdminReportService) {}

  @Get()
  async getReportsList(@Query(new ParsePagerRequestPipe()) query: PagerRequestDto): Promise<GetReportListDto> {
    return this.adminReportService.getList(query);
  }

  @Get(":id")
  async getReportById(@Param("id") reportId: string): Promise<GetReportDto> {
    return this.adminReportService.getById(reportId);
  }
}
