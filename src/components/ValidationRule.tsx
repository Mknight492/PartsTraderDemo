import * as React from "react";
import { Check } from "./Icons/Check";
import { Cross } from "./Icons/Cross";

export const ValidationRule = ({ value, validationFunction, message }: any) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {validationFunction(value) ? <Check /> : <Cross />}
      <span> {message} </span>
    </div>
  );
};
