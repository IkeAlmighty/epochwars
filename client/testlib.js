const testlib = {
  add: (func) => testlib.__test_functions.push(func),
  assert: (testName, condition) => {
    if (!condition) {
      testlib.__failed += 1;
      console.log(`A condition in ${testName} has failed!`);
    }

    return condition;
  },
  runTests: () => {
    testlib.__test_functions.forEach((func) => func());
    console.log(
      `${testlib.__failed} out of ${testlib.__test_functions.length} failed.`
    );
  },
  __failed: 0,
  __test_functions: [],
};
