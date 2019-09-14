import { ApiResponseModelProperty } from "@nestjs/swagger";
import { PagerResponseDto } from "../../../../common/pager";
import { LocationSchema } from "../../schema/location.schema";
import { GetLocationListItemDto } from "./get-location-list-item.dto";

export class GetLocationListDto {
  @ApiResponseModelProperty()
  items: GetLocationListItemDto[];

  @ApiResponseModelProperty()
  pager: PagerResponseDto;

  constructor(items: LocationSchema[], totalItems: number, pageSize: number, pageNumber: number) {
    this.pager = new PagerResponseDto(pageNumber, pageSize, totalItems);
    this.items = items.map(it => new GetLocationListItemDto(it));
  }
}
