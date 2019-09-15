import { Module } from "@nestjs/common";
import { FilesController } from "./controllers/file.controller";
@Module({
  imports: [],
  controllers: [FilesController],
  exports: [],
  providers: [],
})
export class FileModule {}
