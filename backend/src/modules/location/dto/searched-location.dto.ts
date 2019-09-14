import { ApiResponseModelProperty } from "@nestjs/swagger";
import { LocationSchema } from "../schema/location.schema";

export class SearchedLocationDto {
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
  longitude: number;

  @ApiResponseModelProperty()
  latitude: number;

  constructor(schema: LocationSchema) {
    this.id = schema._id.toHexString();
    this.name = schema.name;
    this.city = schema.city;
    this.address = schema.address;
    this.email = schema.email;
    this.postCode = schema.postCode;
    this.longitude = schema.location[0];
    // @ts-ignore
    this.latitude = schema.location[1];
  }
}
