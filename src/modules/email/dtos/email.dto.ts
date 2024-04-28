import { IsEmail } from 'class-validator';

export class EmailDTO {
  @IsEmail()
  emailTo: string;
}
