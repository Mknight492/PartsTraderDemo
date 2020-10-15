import * as React from "react";

export const ValidationRule = ({ value, validationFunction, message }: any) => {
  return (
    <div>
      {validationFunction(value) ? "pass" : "fail"} {message}
    </div>
  );
};
