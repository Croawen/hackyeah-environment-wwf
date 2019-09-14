import { ApiModelProperty } from "@nestjs/swagger";
import { ReportSchema } from "../schema/report.schema";

export class SaveReportDto {
  @ApiModelProperty()
  name: string;
  @ApiModelProperty()
  surname: string;
  @ApiModelProperty()
  city: string;
  @ApiModelProperty()
  user_email: string;
  @ApiModelProperty()
  address: string;
  @ApiModelProperty()
  postcode: string;
  // report to
  @ApiModelProperty()
  facility_name: string;
  @ApiModelProperty()
  facility_city: string;
  @ApiModelProperty()
  facility_address: string;
  @ApiModelProperty()
  facility_email: string;
  // body
  @ApiModelProperty()
  report: string;
  @ApiModelProperty()
  reason: string;
  // Evidence
  @ApiModelProperty()
  evidences: string[];
  @ApiModelProperty()
  photos: string[];
}
