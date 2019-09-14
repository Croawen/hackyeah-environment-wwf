import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { GetReportDto } from "../dto/get-report.dto";
import { ReportSchema } from "../schema/report.schema";
import { SaveReportDto } from "../dto/save-report.dto";
import { ReturnSavedReport } from "../dto/return-saved-report.dto";
import { GetCityDto } from "../dto/get-cty.dto";
import { FillDocument } from "../../document/helpers/fillDocument";
import * as fs from "fs";
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
    let current_datetime = new Date();
    let date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
    dbo["date"] = date;
    const file = await FillDocument.readFile(dbo);

    fs.writeFile("test.docx", file, "binary", function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("The file was saved!");
      }
    });
    return new ReturnSavedReport(dbo);
  }

  async getCityById(reportId: string): Promise<GetCityDto> {
    const report = await this.reportModel.findById(reportId);
    if (!report) throw new NotFoundException();

    return new GetCityDto(report);
  }
}
