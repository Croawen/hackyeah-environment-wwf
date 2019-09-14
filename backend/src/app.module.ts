import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { AppController } from "./app.controller";
import { LocationModule } from "./modules/location/location.module";
import { ReportModule } from "./modules/report/report.module";

@Module({
  imports: [
    TypegooseModule.forRoot(process.env.MONGO_URL, {
      useFindAndModify: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    }),
    ReportModule,
    LocationModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
