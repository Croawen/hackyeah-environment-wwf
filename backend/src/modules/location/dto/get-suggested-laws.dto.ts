import { ApiResponseModelProperty } from "@nestjs/swagger";

export class GetSuggestedLawsDto {
  @ApiResponseModelProperty()
  items: string[];

  constructor(items: string[]) {
    this.items = items;
  }
}
