import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Validate,
} from 'class-validator';
import {
  IntervalDiscountField,
  existenceDiscountFields,
} from './constraints.validator';
import { ErrorMessagesHelper } from 'src/helpers/messages.helper';

export class ProductDTO {
  @IsNotEmpty({ message: ErrorMessagesHelper('name').EMPTY_FIELD })
  @IsString({ message: ErrorMessagesHelper('name').IS_NOT_TEXT })
  @MaxLength(50, { message: ErrorMessagesHelper('name').MAX_50_CHARACTERS })
  name: string;

  @IsNotEmpty({ message: ErrorMessagesHelper('sku').EMPTY_FIELD })
  @IsString({ message: ErrorMessagesHelper('sku').IS_NOT_TEXT })
  @MaxLength(20, { message: ErrorMessagesHelper('sku').MAX_20_CHARACTERS })
  sku: string;

  @IsNotEmpty({ message: ErrorMessagesHelper('category').EMPTY_FIELD })
  @IsNumber({ allowNaN: false })
  category: number;

  @IsNotEmpty({ message: ErrorMessagesHelper('description').EMPTY_FIELD })
  @IsString({ message: ErrorMessagesHelper('description').IS_NOT_TEXT })
  @MaxLength(250, {
    message: ErrorMessagesHelper('description').MAX_250_CHARACTERS,
  })
  description: string;

  @IsNotEmpty({ message: ErrorMessagesHelper('large_description').EMPTY_FIELD })
  @IsString({ message: ErrorMessagesHelper('large_description').IS_NOT_TEXT })
  @MaxLength(1000, {
    message: ErrorMessagesHelper('large_description').MAX_1000_CHARACTERS,
  })
  large_description: string;

  @IsNotEmpty({ message: ErrorMessagesHelper('price').EMPTY_FIELD })
  @IsNumber({ allowInfinity: false, allowNaN: false })
  price: number;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  discount_price?: number;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  discount_percent?: number;

  @IsOptional()
  @IsBoolean({ message: ErrorMessagesHelper('is_new').NOT_BOOLEAN })
  is_new?: boolean;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  colors?: number[];

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  sizes?: number[];

  @IsOptional()
  @IsString({ message: ErrorMessagesHelper('image_link').IS_NOT_TEXT })
  @MaxLength(250, {
    message: ErrorMessagesHelper('image_link').MAX_250_CHARACTERS,
  })
  image_link?: string;

  @IsOptional()
  @IsString({ message: ErrorMessagesHelper('other_images_link').IS_NOT_TEXT })
  @MaxLength(1000, {
    message: ErrorMessagesHelper('other_images_link').MAX_1000_CHARACTERS,
  })
  other_images_link?: string;

  @Validate(existenceDiscountFields)
  existenceDiscountFields: string;

  @Validate(IntervalDiscountField)
  intervalDiscountField: string;
}
