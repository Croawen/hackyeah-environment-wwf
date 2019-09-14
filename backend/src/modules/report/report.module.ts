import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { AdminReportController } from "./controllers/admin-report.controller";
import { ReportController } from "./controllers/report.controller";
import { ReportSchema } from "./schema/report.schema";
import { AdminReportService } from "./services/admin-report.service";
import { ReportService } from "./services/report.service";
@Module({
  imports: [TypegooseModule.forFeature([ReportSchema])],
  controllers: [AdminReportController, ReportController],
  exports: [AdminReportService, ReportService],
  providers: [AdminReportService, ReportService],
})
export class ReportModule {}
