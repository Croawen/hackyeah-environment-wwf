import { ApiResponseModelProperty } from "@nestjs/swagger";
import { ReportType } from "../../../report/enum/report-type.enum";
import { LocationSchema } from "../../schema/location.schema";

export class GetLocationDto {
  @ApiResponseModelProperty()
  id: string;

  @ApiResponseModelProperty()
  name: string;

  @ApiResponseModelProperty()
  city: string;

  @ApiResponseModelProperty()
  address: string;

  @ApiResponseModelProperty()
  email: string;

  @ApiResponseModelProperty()
  postCode: string;

  @ApiResponseModelProperty()
  type: ReportType;

  @ApiResponseModelProperty()
  latitude: number;

  @ApiResponseModelProperty()
  longitude: number;

  constructor(schema: LocationSchema) {
    this.id = schema._id.toHexString();
    this.name = schema.name;
    this.city = schema.city;
    this.address = schema.address;
    this.email = schema.email;
    this.postCode = schema.postCode;
    this.type = schema.type;
    this.longitude = schema.location[0];
    // @ts-ignore
    this.latitude = schema.location[1];
  }
}
