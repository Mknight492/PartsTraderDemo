import * as React from "react";
import styled from "styled-components";
import "./styles.css";

import { PartNumberValidationRules } from "./utilities/regularExpressions/ValidatePartNumber.Regex";
import useDebounce from "use-debounce/lib/useDebounce";
import { PartsList } from "./PartsList";
import { ValidatedFormField } from "./components/ValidatedFormField";
import { isBlacklisted } from "./utilities/isBlackListed";
import { Gear } from "./components/Icons/Gear";

export default function App() {
  const [partNumber, setPartNumber] = React.useState("");

  //only make api request with lowercase letters as partnumbers are case-insensitive
  //and only make request after user has  paused inputing for 300ms
  const [debouncedPartNumber] = useDebounce(partNumber.toLowerCase(), 300);

  const partNumberIsValid = PartNumberValidationRules.every(
    ({ validationFunction }) => validationFunction(debouncedPartNumber)
  );

  return (
    <main className="App">
      <Header>
        <Gear />
        <h1>PartsTrader</h1>
      </Header>
      <PartSearchSection id="partsSearch">
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
          {debouncedPartNumber &&
            partNumberIsValid &&
            !isBlacklisted(debouncedPartNumber) && (
              <PartsList partNumber={debouncedPartNumber} />
            )}
        </div>
      </PartSearchSection>
    </main>
  );
}

// I wanted to use the pactual Parts trader color but it fails accessability critera as it has insufficient contrast with white
// rgb(16, 146, 182) , also if It were a larger project I would use variables for all the main colors and sizes etc
const Header = styled.div`
  background-color: rgb(16, 146, 182);
  padding: 6px;
  display: flex;
  align-items: center;
  h1 {
    padding: 20px;
    margin: 0px;
    color: white;
    display: inline;
    font-size: 35px;
  }
`;

const PartSearchSection = styled.section`
  padding: 30px;
  h2 {
    color: rgb(16, 146, 182);
  }
`;
