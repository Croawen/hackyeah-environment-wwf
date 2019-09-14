import { ApiModelProperty } from "@nestjs/swagger";

export class SaveLocationDto {
  @ApiModelProperty()
  name: string;

  @ApiModelProperty()
  city: string;

  @ApiModelProperty()
  address: string;

  @ApiModelProperty()
  email: string;

  @ApiModelProperty()
  longitude: number;

  @ApiModelProperty()
  latitude: number;
}
