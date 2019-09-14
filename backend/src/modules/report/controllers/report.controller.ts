import { Controller, Get, Inject, Param, Body, Post } from "@nestjs/common";
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { GetReportDto } from "../dto/get-report.dto";
import { ReturnSavedReport } from "../dto/return-saved-report.dto";
import { SaveReportDto } from "../dto/save-report.dto";
import { ReportService } from "../services/report.service";

@ApiUseTags("reports")
@Controller("reports")
export class ReportController {
  constructor(@Inject(ReportService) private readonly reportService: ReportService) {}

  @Get(":id")
  @ApiOperation({ title: "Get report by id." })
  @ApiOkResponse({ type: GetReportDto })
  @ApiNotFoundResponse({ description: "Report with provided id was not found." })
  async getById(@Param("id") reportId: string): Promise<GetReportDto> {
    return this.reportService.getById(reportId);
  }

  @Post()
  @ApiOperation({ title: "Send report to database" })
  @ApiOkResponse({ type: ReturnSavedReport })
  @ApiNotFoundResponse({ description: "Error while saving to database" })
  async add(@Body() dto: SaveReportDto): Promise<ReturnSavedReport> {
    return this.reportService.save(dto);
  }
}
