import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { PagerRequestDto } from "../../../common/pager";
import { GetLocationListDto } from "../dto/admin/get-location-list.dto";
import { GetLocationDto } from "../dto/admin/get-location.dto";
import { LocationSchema } from "../schema/location.schema";

@Injectable()
export class AdminLocationService {
  constructor(@InjectModel(LocationSchema) private readonly locationMode: ModelType<LocationSchema>) {}

  async getById(reportId: string): Promise<GetLocationDto> {
    const report = await this.locationMode.findById(reportId);
    if (!report) throw new NotFoundException();

    return new GetLocationDto(report);
  }

  async getList(pager: PagerRequestDto): Promise<GetLocationListDto> {
    const totalItems = await this.locationMode.countDocuments();
    let items = await this.locationMode
      .find()
      .skip(pager.pageNumber * pager.pageSize)
      .limit(pager.pageSize);

    return new GetLocationListDto(items, totalItems, pager.pageSize, pager.pageNumber);
  }
}
