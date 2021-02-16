const formatList = require("./index");

test("Empty array returns empty string", () => {
  const a = [];
  const formatted = formatList(a);
  expect(formatted).toBe("");
});
test("No separator in single name", () => {
  const a = [{ name: "Bart" }];
  const formatted = formatList(a);
  expect(formatted).toBe("Bart");
});
test("No comma in two names", () => {
  const a = [{ name: "Bart" }, { name: "Lisa" }];
  const formatted = formatList(a);
  expect(formatted).toBe("Bart & Lisa");
});
test("Single comma and & in three names", () => {
  const a = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
  const formatted = formatList(a);
  expect(formatted).toBe("Bart, Lisa & Maggie");
});
