import nodemailer from "nodemailer";
import { SENDER_MAIL, SENDER_MAIL_PASSWORD } from "../keys/secrets";

class EmailService {
  from: string;
  to: string;
  subject: string;
  text: string | any;

  constructor(to: string, subject: string, text: string | any) {
    this.from = SENDER_MAIL;
    this.subject = subject;
    this.to = to;
    this.text = text;
  }

  async send() {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SENDER_MAIL,
        pass: SENDER_MAIL_PASSWORD,
      },
    });

    const options = {
      from: this.from,
      to: this.to,
      subject: this.subject,
      text: this.text,
    };

    return await transporter.sendMail(options);
  }
}

export default EmailService;
