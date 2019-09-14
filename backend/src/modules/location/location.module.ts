import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { AdminLocationController } from "./controllers/admin-location.controller";
import { LocationController } from "./controllers/location.controller";
import { LocationSchema } from "./schema/location.schema";
import { AdminLocationService } from "./services/admin-location.service";
import { LocationService } from "./services/location.service";

@Module({
  imports: [TypegooseModule.forFeature([LocationSchema])],
  controllers: [LocationController, AdminLocationController],
  exports: [LocationService, AdminLocationService],
  providers: [LocationService, AdminLocationService],
})
export class LocationModule {}
