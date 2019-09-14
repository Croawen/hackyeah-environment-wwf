import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { PagerRequestDto } from "../../../common/pager";
import { GetLocationListDto } from "../dto/admin/get-location-list.dto";
import { GetLocationDto } from "../dto/admin/get-location.dto";
import { SaveLocationDto } from "../dto/admin/save-location.dto";
import { LocationSchema } from "../schema/location.schema";

@Injectable()
export class AdminLocationService {
  constructor(@InjectModel(LocationSchema) private readonly locationModel: ModelType<LocationSchema>) {}

  async getById(locationId: string): Promise<GetLocationDto> {
    const location = await this.locationModel.findById(locationId);
    if (!location) throw new NotFoundException();

    return new GetLocationDto(location);
  }

  async getList(pager: PagerRequestDto): Promise<GetLocationListDto> {
    const totalItems = await this.locationModel.countDocuments();
    let items = await this.locationModel
      .find()
      .skip(pager.pageNumber * pager.pageSize)
      .limit(pager.pageSize);

    return new GetLocationListDto(items, totalItems, pager.pageSize, pager.pageNumber);
  }

  async saveNewLocation(dto: SaveLocationDto): Promise<void> {
    const dbo = new this.locationModel({ latitude: undefined, longitude: undefined, location: [dto.longitude, dto.latitude], ...dto });
    await dbo.save();
  }

  async updateExistingLocation(locationId: string, dto: SaveLocationDto): Promise<void> {
    const location = await this.locationModel.findById(locationId);
    if (!locationId) throw new NotFoundException();

    await this.locationModel.updateOne({ _id: location._id }, { $set: { latitude: undefined, longitude: undefined, location: [dto.longitude, dto.latitude], ...dto } });
  }

  async deleteLocation(locationId: string): Promise<void> {
    const location = await this.locationModel.findById(locationId);
    if (!locationId) throw new NotFoundException();

    await location.remove();
  }
}
