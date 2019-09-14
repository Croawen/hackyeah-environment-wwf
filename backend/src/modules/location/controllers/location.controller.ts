import { Controller, Inject } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";
import { LocationService } from "../services/location.service";

@ApiUseTags("locations")
@Controller("locations")
export class LocationController {
  constructor(@Inject(LocationService) private readonly locationService: LocationService) {}
}
