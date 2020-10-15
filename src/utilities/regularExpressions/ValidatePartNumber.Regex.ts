//consider adding the
export type IValidationRule<T> = {
  validationFunction: (x: T) => boolean;
  validationDescription: string;
};

export const PartNumberValidationRules: IValidationRule<string>[] = [
  {
    validationFunction: (partNumber) => RegExp("^([0-9]{4})").test(partNumber),
    validationDescription:
      "Part number, has a valid part id, by starting with four letters", //partid
  },
  {
    validationFunction: (partNumber) => /^[^-]+-[^-]+$/.test(partNumber),
    validationDescription:
      "Part number and part code are separated by a single hypen ( '-' )",
  },
  {
    validationFunction: (partNumber) =>
      RegExp("[a-zA-Z0-9]{4}$").test(partNumber),
    validationDescription:
      "Part number, has a valide part code, by ending with four or more digits or number", //partcode
  },
  {
    validationFunction: (partNumber) =>
      RegExp("^[a-zA-Z0-9-]*$").test(partNumber),
    validationDescription:
      "Part number doesn't have any special characters or white space",
  },
];

export const AllPartNumberRegexs = (partnumber: string) =>
  PartNumberValidationRules.every(({ validationFunction }) =>
    validationFunction(partnumber)
  );
