import * as React from "react";
import "./styles.css";

import { PartNumberValidationRules } from "./utilities/regularExpressions/ValidatePartNumber.Regex";
import useDebounce from "use-debounce/lib/useDebounce";
import { PartsList } from "./PartsList";

import exclusionsList from "./Exclusions.json";
import { ValidatedFormField } from "./components/ValidatedFormField";

export default function App() {
  const [partNumber, setPartNumber] = React.useState("");

  //only make api request with lowercase letters as partnumbers are case-insensitive
  //and only make request after user has  paused inputing for 300ms
  const [debouncedPartNumber] = useDebounce(partNumber.toLowerCase(), 300);

  const partNumberIsValid = PartNumberValidationRules.every(
    ({ validationFunction }) => validationFunction(debouncedPartNumber)
  );

  const isBlacklisted = (exclusionsList as any)
    .map((e) => e.PartNumber)
    .includes(debouncedPartNumber);

  return (
    <main className="App">
      <h1>PartsTrader</h1>
      <h2>Search for a part </h2>
      <form>
        <label htmlFor="partNumber">Part Number: </label>
        <ValidatedFormField
          id="partNumber"
          value={partNumber}
          setValue={(partNumber) => setPartNumber(partNumber)}
          validations={PartNumberValidationRules}
        />
      </form>
      <div>
        {debouncedPartNumber && partNumberIsValid && !isBlacklisted && (
          <PartsList partNumber={debouncedPartNumber} />
        )}
      </div>
    </main>
  );
}
