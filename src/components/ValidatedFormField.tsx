import React from "react";
import { IValidationRule } from "../utilities/regularExpressions/ValidatePartNumber.Regex";
import { ValidationRule } from "./ValidationRule";

export type IValidateFormFieldProps<
  T extends string | number | readonly string[]
> = {
  value: T;
  id: string;
  setValue: (value) => void;
  validations: IValidationRule<T>[];
};

export function ValidatedFormField<
  T extends string | number | readonly string[]
>({ value, id, setValue, validations }: IValidateFormFieldProps<T>) {
  return (
    <>
      <input
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-describedby={id + "errors"}
      />
      <div id={id + "errors"} className="sr-only">
        {validations
          .filter((x) => !x.validationFunction(value))
          .map((x) => x.validationDescription)
          .join(". ")}
      </div>
      {validations.map(({ validationFunction, validationDescription }) => (
        <ValidationRule
          key={validationDescription}
          validationFunction={validationFunction}
          value={value}
          message={validationDescription}
        />
      ))}
    </>
  );
}
