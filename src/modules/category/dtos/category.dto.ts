import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { ErrorMessagesHelper } from 'src/helpers/messages.helper';

export class CategoryDTO {
  @IsNotEmpty({ message: ErrorMessagesHelper('name').EMPTY_FIELD })
  @IsString({ message: ErrorMessagesHelper('name').IS_NOT_TEXT })
  @MaxLength(50, { message: ErrorMessagesHelper('name').MAX_50_CHARACTERS })
  name: string;

  @IsOptional()
  @IsString({ message: ErrorMessagesHelper('image_link').IS_NOT_TEXT })
  @MaxLength(250, {
    message: ErrorMessagesHelper('image_link').MAX_250_CHARACTERS,
  })
  image_link?: string;
}
