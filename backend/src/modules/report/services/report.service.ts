import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { GetReportDto } from "./dto/get-report.dto";
import { ReportSchema } from "./schema/report.schema";
import { SaveReportDto } from "./dto/save-report.dto";
import { ReturnSavedReport } from "./dto/return-saved-report.dto";

@Injectable()
export class ReportService {
  constructor(@InjectModel(ReportSchema) private readonly reportModel: ModelType<ReportSchema>) {}

  async getById(reportId: string): Promise<GetReportDto> {
    const report = await this.reportModel.findById(reportId);
    if (!report) throw new NotFoundException();

    return new GetReportDto(report);
  }

  async save(report: SaveReportDto): Promise<ReturnSavedReport> {
    const dbo = new this.reportModel(report);
    await dbo.save();
    return new ReturnSavedReport(dbo);
  }
}
