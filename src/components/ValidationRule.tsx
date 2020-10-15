import * as React from "react";
import { Check } from "./Check";
import { Cross } from "./Cross";

export const ValidationRule = ({ value, validationFunction, message }: any) => {
  return (
    <div>
      {validationFunction(value) ? <Check /> : <Cross />}
      {message}
    </div>
  );
};
