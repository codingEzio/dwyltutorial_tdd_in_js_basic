// Brief intro of Britain's national currency (guide for non-Brits')
// https://www.visitbritain.com/gb/en/plan-your-trip/money/currency-uk

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
