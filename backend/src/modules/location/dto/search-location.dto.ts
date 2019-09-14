import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";
import { Max, Min, IsEnum, ValidateIf } from "class-validator";
import { ReportType } from "../../report/enum/report-type.enum";

export class SearchLocationDto {
  @ApiModelPropertyOptional()
  @Min(0)
  @Max(Number.MAX_SAFE_INTEGER)
  @ValidateIf(o => o.radius)
  radius?: number;

  @ApiModelProperty()
  @Min(-180)
  @Max(180)
  longitude: number;

  @ApiModelProperty()
  @Min(-90)
  @Max(90)
  latitude: number;

  @ApiModelProperty({ enum: Object.values(ReportType), type: String })
  @IsEnum(ReportType)
  type: ReportType;
}
