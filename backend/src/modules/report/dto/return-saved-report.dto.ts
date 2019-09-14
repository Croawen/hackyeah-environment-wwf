import { ApiResponseModelProperty } from "@nestjs/swagger";
import { ReportSchema } from "../schema/report.schema";

export class ReturnSavedReport {
  @ApiResponseModelProperty()
  id: string;

  constructor(schema: ReportSchema) {
    this.id = schema._id.toHexString();
  }
}
