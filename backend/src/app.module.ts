import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { AppController } from "./app.controller";

@Module({
  imports: [
    TypegooseModule.forRoot(process.env.MONGO_URL, {
      useFindAndModify: true,
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
