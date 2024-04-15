import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'existenceDiscountFields', async: false })
export class existenceDiscountFields implements ValidatorConstraintInterface {
  validate(_: any, args?: ValidationArguments): boolean | Promise<boolean> {
    const { object } = args;
    const discountPercent = object['discount_percent'];
    const discountPrice = object['discount_price'];

    return (
      (discountPercent === undefined && discountPrice === undefined) ||
      (discountPercent !== undefined && discountPrice !== undefined)
    );
  }

  defaultMessage(): string {
    return 'Both discount_percent and discount_price must be defined. Otherwise, both must be undefined';
  }
}

@ValidatorConstraint({ name: 'intervalDiscountField', async: false })
export class IntervalDiscountField implements ValidatorConstraintInterface {
  validate(_: any, args?: ValidationArguments): boolean | Promise<boolean> {
    const { object } = args;
    const discountPercent = +object['discount_percent'];
    const discountPrice = +object['discount_price'];

    if (discountPrice !== undefined) return true;

    return discountPercent > 0 && discountPercent <= 1;
  }

  defaultMessage(): string {
    return 'The discount_percent must be greater than 0 and less than or equal to 1';
  }
}
