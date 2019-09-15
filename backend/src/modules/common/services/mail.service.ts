import * as sgMail from "@sendgrid/mail";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
  async sendFormalMail(recipient: string, id, buffer: Buffer) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const base64 = buffer.toString("base64");
    const msg = {
      to: recipient,
      from: "zgloszenia@wwf.pl",
      subject: `Zawiadomienie o możliwości popełnienia przestępstwa - Zgłoszenie ${id}`,
      text: "Chcemy poinformować o możliwości popełnienia przestępstwa",
      attachments: [
        {
          content: base64,
          filename: `${id}.docx`,
          type: "application/msword",
          disposition: "attachment",
          contentId: "report",
        },
      ],
    };
    sgMail.send(msg);
  }

  async sendConfirmationMail(recipient: string, id, buffer: Buffer) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const base64 = buffer.toString("base64");
    const msg = {
      to: recipient,
      from: "zgloszenia@wwf.pl",
      subject: `Zawiadomienie o możliwości popełnienia przestępstwa - Zgłoszenie ${id} - Potwierdzenie`,
      text: "Przesyłamy kopię Twojego zgłoszenia",
      attachments: [
        {
          content: base64,
          filename: `${id}.docx`,
          type: "application/msword",
          disposition: "attachment",
          contentId: "report",
        },
      ],
    };
    sgMail.send(msg);
  }
}
