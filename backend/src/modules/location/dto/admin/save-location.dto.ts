import { ApiModelProperty } from "@nestjs/swagger";
import { IsEnum, Max, Min } from "class-validator";
import { ReportType } from "../../../report/enum/report-type.enum";

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
  postCode: string;

  @ApiModelProperty()
  @Min(-180)
  @Max(180)
  longitude: number;

  @ApiModelProperty()
  @Min(-90)
  @Max(90)
  latitude: number;

  @ApiModelProperty({ enum: Object.values(ReportType) })
  @IsEnum(ReportType)
  type: ReportType;
}
