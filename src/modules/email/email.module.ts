import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { EmailUtils } from './email.utils';

@Module({
  imports: [],
  controllers: [EmailController],
  providers: [EmailService, EmailUtils],
})
export class EmailModule {}
