import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { AppController } from "./app.controller";

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:5000/environment-task", {
      useFindAndModify: true,
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
