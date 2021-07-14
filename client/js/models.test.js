testlib.add(() => {
  const assert = testlib.assert;
  const testName = "models.js";
  assert(testName, new models.Player("red").color == "red");
});
