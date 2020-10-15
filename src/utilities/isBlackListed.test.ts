import { isBlacklisted } from "./isBlackListed";

test("Blacklists lower and upper case parts correctly", () => {
  expect(isBlacklisted("1111-Invoice")).toBe(true);
  expect(isBlacklisted("1111-invoice")).toBe(true);
  expect(isBlacklisted("1234-abcd")).toBe(true);
});

test("non blacklisted items are not blacklisted correctly", () => {
  expect(isBlacklisted("1234-1234")).toBe(false);
  expect(isBlacklisted("123-abcd")).toBe(false);
});
