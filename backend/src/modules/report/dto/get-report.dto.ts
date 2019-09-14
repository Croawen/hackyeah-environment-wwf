import { ApiResponseModelProperty } from "@nestjs/swagger";
import { ReportSchema } from "../schema/report.schema";
import { ReportType } from "../enum/report-type.enum";

export class GetReportDto {
  @ApiResponseModelProperty()
  id: string;
  @ApiResponseModelProperty()
  type: ReportType;
  @ApiResponseModelProperty()
  name: string;
  @ApiResponseModelProperty()
  surname: string;
  @ApiResponseModelProperty()
  city: string;
  @ApiResponseModelProperty()
  userEmail: string;
  @ApiResponseModelProperty()
  address: string;
  @ApiResponseModelProperty()
  postcode: string;
  // report to
  @ApiResponseModelProperty()
  facilityName: string;
  @ApiResponseModelProperty()
  facilityCity: string;
  @ApiResponseModelProperty()
  facilityAddress: string;
  @ApiResponseModelProperty()
  facilityPostcode: string;
  // body
  @ApiResponseModelProperty()
  report: string;
  @ApiResponseModelProperty()
  reason: string;
  // Evidence
  @ApiResponseModelProperty()
  evidences: string[];
  @ApiResponseModelProperty()
  photos: string[];

  constructor(schema: ReportSchema) {
    this.id = schema._id.toHexString();
    this.name = schema.name;
    this.surname = schema.surname;
    this.city = schema.city;
    this.userEmail = schema.userEmail;
    this.address = schema.address;
    this.postcode = schema.postcode;
    this.facilityName = schema.facilityName;
    this.facilityCity = schema.facilityCity;
    this.facilityAddress = schema.facilityAddress;
    this.report = schema.report;
    this.reason = schema.reason;
    this.evidences = schema.evidences;
    this.photos = schema.photos;
  }
}
