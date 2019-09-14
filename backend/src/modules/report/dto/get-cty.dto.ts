import { ApiResponseModelProperty } from "@nestjs/swagger";
import { ReportSchema } from "../schema/report.schema";

export class GetCityDto {
  @ApiResponseModelProperty()
  city: string;

  constructor(schema: ReportSchema) {
    this.city = schema.city;
  }
}
