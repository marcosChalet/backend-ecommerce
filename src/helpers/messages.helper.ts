export const ErrorMessagesHelper = (fieldName: string) => {
  const data = {
    EMPTY_FIELD: `The field ${fieldName} cannot be empty`,
    IS_NOT_TEXT: `The field ${fieldName} must be a text`,
    MAX_20_CHARACTERS: `The field ${fieldName} must be less than 20 characters`,
    MAX_50_CHARACTERS: `The field ${fieldName} must be less than 50 characters`,
    MAX_250_CHARACTERS: `The field ${fieldName} must be less than 250 characters`,
    MAX_500_CHARACTERS: `The field ${fieldName} must be less than 250 characters`,
    MAX_1000_CHARACTERS: `The field ${fieldName} must be less than 1000 characters`,
    IS_NAN: `The field ${fieldName} must be a number`,
    NOT_BOOLEAN: `The field ${fieldName} must be a boolean`,
  };

  return data;
};
