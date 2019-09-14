import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { GetReportDto } from "./dto/get-report.dto";
import { ReportSchema } from "./schema/report.schema";

@Injectable()
export class ReportService {
  constructor(@InjectModel(ReportSchema) private readonly productModel: ModelType<ReportSchema>) {}

  async getById(reportId: string): Promise<GetReportDto> {
    const report = await this.productModel.findById(reportId);
    if (!report) throw new NotFoundException();

    return new GetReportDto(report);
  }
}
