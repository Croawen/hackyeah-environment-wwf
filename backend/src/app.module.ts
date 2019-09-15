import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { AppController } from "./app.controller";
import { LocationModule } from "./modules/location/location.module";
import { ReportModule } from "./modules/report/report.module";
import { FileModule } from "./modules/files/file.module";
@Module({
  imports: [
    // @ts-ignore
    TypegooseModule.forRoot(process.env.MONGO_URL, {
      // @ts-ignore
      useFindAndModify: true,
      // @ts-ignore
      useCreateIndex: true,
      // @ts-ignore
      useNewUrlParser: true,
    }),
    ReportModule,
    LocationModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
