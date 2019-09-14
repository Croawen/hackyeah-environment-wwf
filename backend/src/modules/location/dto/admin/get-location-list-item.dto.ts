import { ApiResponseModelProperty } from "@nestjs/swagger";
import { LocationSchema } from "../../schema/location.schema";

export class GetLocationListItemDto {
  @ApiResponseModelProperty()
  id: string;

  constructor(schema: LocationSchema) {
    this.id = schema._id.toHexString();
  }
}
