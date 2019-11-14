test("getChange(1, 1) should be equal [] - an empty array", function(assert) {
  let result = getChange(1, 1);
  let expected = [];
  assert.deepEqual(result, expected);
});
