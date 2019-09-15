import { Module } from "@nestjs/common";
import { MailService } from "./services/mail.service";

@Module({
  imports: [],
  controllers: [],
  exports: [MailService],
  providers: [MailService],
})
export class CommonModule {}
