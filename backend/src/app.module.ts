import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { AppController } from "./app.controller";
import { ReportModule } from "./modules/report/report.module";

@Module({
  imports: [
    TypegooseModule.forRoot(process.env.MONGO_URL, {
      useFindAndModify: true,
      useNewUrlParser: true,
    }),
    ReportModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
