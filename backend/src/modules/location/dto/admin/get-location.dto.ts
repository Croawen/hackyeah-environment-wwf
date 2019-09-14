import { ApiResponseModelProperty } from "@nestjs/swagger";
import { LocationSchema } from "../../schema/location.schema";

export class GetLocationDto {
  @ApiResponseModelProperty()
  id: string;

  constructor(schema: LocationSchema) {
    this.id = schema._id.toHexString();
  }
}
