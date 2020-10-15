import { AllPartNumberRegexs } from "./ValidatePartNumber.Regex";

test("Regexs Correctly passes all test cases provided", () => {
  expect(AllPartNumberRegexs("1234-abcd")).toBe(true);
  expect(AllPartNumberRegexs("1234-a1b2c3d4")).toBe(true);
});

test("Regexs Correctly fails all test cases provided", () => {
  expect(AllPartNumberRegexs("a234-abcd")).toBe(false);
  expect(AllPartNumberRegexs("123-abcd")).toBe(false);
});
