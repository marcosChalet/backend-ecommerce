import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailDTO } from './dtos/email.dto';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send-email')
  sendEmail(@Body() { emailTo }: EmailDTO) {
    return this.emailService.sendEmail(emailTo);
  }
}
