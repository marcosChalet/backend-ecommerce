import { Injectable } from '@nestjs/common';
import { EmailUtils } from './email.utils';
import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';

@Injectable()
export class EmailService {
  emailFrom = this.configService.get<string>('EMAIL_FROM');
  private readonly transporter;

  constructor(
    private readonly configService: ConfigService,
    private readonly emailUtils: EmailUtils,
  ) {
    this.transporter = createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_FROM'),
        pass: this.configService.get<string>('EMAIL_PASSWORD'),
      },
      secure: true,
    });
  }

  async sendEmail(emailTo: string) {
    try {
      const emailData = await this.emailUtils.createEmail(
        this.emailFrom,
        emailTo,
        'Projeto ecommerce. Este é apenas um email de teste.',
      );

      const info = await this.transporter.sendMail(emailData);

      return {
        info: info.response,
        message: 'The email has been sent.',
      };
    } catch {
      console.warn('The email was not sent');
    }
  }
}
