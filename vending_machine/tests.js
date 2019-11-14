/*
    QUnit_test("description", func-for-Qunit-to-execute(inst_of_Qunit){
      // do some fancy stuff
      inst_of_Qunit_like_assert.assertions_suchas_equal(Computed, ConstOrElse);
    })
*/
test("This sample test should always pass!", function(assert) {
  var result = 1 + 1;
  assert.equal(result, 2); // just so we know everything loaded ok
});
//
test("This is what a failing test looks like!", function(assert) {
  var result = [1, 2, 3].indexOf(1); // this should be 0
  assert.equal(result, -1); // we *expect* this to fail
});
