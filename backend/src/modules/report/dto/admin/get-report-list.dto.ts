import { ApiResponseModelProperty } from "@nestjs/swagger";
import { PagerResponseDto } from "../../../../common/pager";
import { ReportSchema } from "../../schema/report.schema";
import { GetReportListItemDto } from "./get-report-list-item.dto";

export class GetReportListDto {
  @ApiResponseModelProperty()
  items: GetReportListItemDto[];

  @ApiResponseModelProperty()
  pager: PagerResponseDto;

  constructor(items: ReportSchema[], totalItems: number, pageSize: number, pageNumber: number) {
    this.pager = new PagerResponseDto(pageNumber, pageSize, totalItems);
    this.items = items.map(it => new GetReportListItemDto(it));
  }
}
