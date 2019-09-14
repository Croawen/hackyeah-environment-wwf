import { Controller, Get, Inject, Param } from "@nestjs/common";
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { GetReportDto } from "./dto/get-report.dto";
import { ReportService } from "./report.service";

@Controller()
export class ReportController {
  constructor(@Inject(ReportService) private readonly reportService: ReportService) {}

  @Get(":id")
  @ApiOperation({ title: "Get report by id." })
  @ApiOkResponse({ type: GetReportDto })
  @ApiNotFoundResponse({ description: "Report with provided id was not found." })
  async getById(@Param("id") reportId: string): Promise<GetReportDto> {
    return this.reportService.getById(reportId);
  }
}
