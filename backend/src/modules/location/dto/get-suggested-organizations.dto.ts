import { ApiResponseModelProperty } from "@nestjs/swagger";

export class GetSuggestedOrganizationsDto {
  @ApiResponseModelProperty()
  items: string[];

  constructor(items: string[]) {
    this.items = items;
  }
}
