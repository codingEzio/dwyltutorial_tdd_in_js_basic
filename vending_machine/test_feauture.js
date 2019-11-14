// Brief intro of Britain's national currency (guide for non-Brits')
// https://www.visitbritain.com/gb/en/plan-your-trip/money/currency-uk

/* The code block below ONLY applies to Node.js */
/* istanbul ignore if */
if (typeof module !== 'undefined' && module.exports) {
    // require QUnit node.js module
    var QUnit = require('qunitjs');
    // alias the `QUnit.test` so we don't have change our code
    var test = QUnit.test;
    // use `console.log` for test output
    require('qunit-tap')(QUnit, console.log);
    // load the `getChange` method
    var getChange = require('./feature.js');
}

test('getChange(1, 1) should be equal [] - an empty array', function(assert) {
    let result = getChange(1, 1);
    let expected = [];
    assert.deepEqual(result, expected);
});

test('getChange(212, 300) should be equal [50, 20, 10, 5, 2, 1]', function(assert) {
    // totalPayable = 212                     ~ £2.12
    // cashPaid     = 300                     ~ £3.00
    // difference   =  88                     ~ 88p
    // change       = [50, 20, 10, 5, 2, 1]   ~ 50p, 20p, 10p, 5p, 2p, 1p
    let result = getChange(212, 300);
    let expected = [50, 20, 10, 5, 2, 1];
    assert.deepEqual(result, expected);
});

test('getChange(277, 600) should be equal [200, 100, 20, 2, 1]', function(assert) {
    let result = getChange(277, 600);
    let expected = [200, 100, 20, 2, 1];
    assert.deepEqual(result, expected);
});

/* The code block below ONLY applies to Node.js */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
    // allow CommonJS/Node.js to `require()` this method
    module.exports = getChange;
}

/* The code block below ONLY applies to Node.js */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
    // run the tests
    QUnit.load();
}
