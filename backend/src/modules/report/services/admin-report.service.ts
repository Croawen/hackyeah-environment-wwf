import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { PagerRequestDto } from "../../../common/pager";
import { GetReportListDto } from "../dto/admin/get-report-list.dto";
import { GetReportDto } from "../dto/admin/get-report.dto";
import { ReportSchema } from "../schema/report.schema";

@Injectable()
export class AdminReportService {
  constructor(@InjectModel(ReportSchema) private readonly reportModel: ModelType<ReportSchema>) {}

  async getById(reportId: string): Promise<GetReportDto> {
    const report = await this.reportModel.findById(reportId);
    if (!report) throw new NotFoundException();

    return new GetReportDto(report);
  }

  async getList(pager: PagerRequestDto): Promise<GetReportListDto> {
    const totalItems = await this.reportModel.countDocuments();
    let items = await this.reportModel
      .find()
      .skip(pager.pageNumber * pager.pageSize)
      .limit(pager.pageSize);

    return new GetReportListDto(items, totalItems, pager.pageSize, pager.pageNumber);
  }
}
