import { Injectable, NotFoundException, Inject } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { GetReportDto } from "../dto/get-report.dto";
import { ReportSchema } from "../schema/report.schema";
import { SaveReportDto } from "../dto/save-report.dto";
import { ReturnSavedReport } from "../dto/return-saved-report.dto";
import { GetCityDto } from "../dto/get-cty.dto";
import { DocumentHelper } from "../../document/helpers/document.helper";
import * as fs from "fs";
import { MailService } from "../../common/services/mail.service";
import { reportTypeDictionary } from "../data/report-type.dictionary";
@Injectable()
export class ReportService {
  constructor(@InjectModel(ReportSchema) private readonly reportModel: ModelType<ReportSchema>, @Inject(MailService) private readonly mailService: MailService) {}

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
    dbo.type = reportTypeDictionary[dbo.type];

    const file = await DocumentHelper.readFile(dbo, dbo.id);

    await this.mailService.sendFormalMail(dbo.facilityEmail, dbo._id, file);
    await this.mailService.sendConfirmationMail(dbo.userEmail, dbo._id, file);

    return new ReturnSavedReport(dbo);
  }

  async getCityById(reportId: string): Promise<GetCityDto> {
    const report = await this.reportModel.findById(reportId);
    if (!report) throw new NotFoundException();

    return new GetCityDto(report);
  }
}
