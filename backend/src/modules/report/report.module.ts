import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { ReportController } from "./controllers/report.controller";
import { ReportService } from "./services/report.service";
import { ReportSchema } from "./schema/report.schema";
@Module({
  imports: [TypegooseModule.forFeature([ReportSchema])],
  controllers: [ReportController],
  exports: [ReportService],
  providers: [ReportService],
})
export class ReportModule {}
