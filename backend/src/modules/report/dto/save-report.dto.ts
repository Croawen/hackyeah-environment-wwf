import { ApiModelProperty } from "@nestjs/swagger";
import { ReportSchema } from "../schema/report.schema";
import { ReportType } from "../enum/report-type.enum";

export class SaveReportDto {
  @ApiModelProperty()
  type: ReportType;
  @ApiModelProperty()
  name: string;
  @ApiModelProperty()
  surname: string;
  @ApiModelProperty()
  city: string;
  @ApiModelProperty()
  userEmail: string;
  @ApiModelProperty()
  address: string;
  @ApiModelProperty()
  postcode: string;
  // report to
  @ApiModelProperty()
  facilityName: string;
  @ApiModelProperty()
  facilityCity: string;
  @ApiModelProperty()
  facilityAddress: string;
  @ApiModelProperty()
  facilityPostcode: string;
  @ApiModelProperty()
  facilityEmail: string;
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
