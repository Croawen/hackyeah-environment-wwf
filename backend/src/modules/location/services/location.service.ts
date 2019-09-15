import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { SearchLocationDto } from "../dto/search-location.dto";
import { SearchedLocationDto } from "../dto/searched-location.dto";
import { LocationSchema } from "../schema/location.schema";

@Injectable()
export class LocationService {
  constructor(@InjectModel(LocationSchema) private readonly locationModel: ModelType<LocationSchema>) {}

  async searchLocations(dto: SearchLocationDto): Promise<SearchedLocationDto[]> {
    const nearQuery: any = {
      $geometry: { type: "Point", coordinates: [dto.longitude, dto.latitude] },
    };
    if (dto.radius) nearQuery.$maxDistance = dto.radius;

    const locations = await this.locationModel.find({
      type: dto.type,
      location: {
        $nearSphere: nearQuery,
      },
    });
    return locations.map(l => new SearchedLocationDto(l));
  }
}
