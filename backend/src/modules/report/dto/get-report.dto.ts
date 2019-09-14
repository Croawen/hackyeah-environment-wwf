import { ApiResponseModelProperty } from "@nestjs/swagger";
import { ReportSchema } from "../schema/report.schema";

export class GetReportDto {
  @ApiResponseModelProperty()
  id: string;
  @ApiResponseModelProperty()
  name: string;
  @ApiResponseModelProperty()
  surname: string;
  @ApiResponseModelProperty()
  city: string;
  @ApiResponseModelProperty()
  user_email: string;
  @ApiResponseModelProperty()
  address: string;
  @ApiResponseModelProperty()
  postcode: string;
  // report to
  @ApiResponseModelProperty()
  facility_name: string;
  @ApiResponseModelProperty()
  facility_city: string;
  @ApiResponseModelProperty()
  facility_address: string;
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
    this.user_email = schema.user_email;
    this.address = schema.address;
    this.postcode = schema.postcode;
    this.facility_name = schema.facility_name;
    this.facility_city = schema.facility_city;
    this.facility_address = schema.facility_address;
    this.report = schema.report;
    this.reason = schema.reason;
    this.evidences = schema.evidences;
    this.photos = schema.photos;
  }
}
