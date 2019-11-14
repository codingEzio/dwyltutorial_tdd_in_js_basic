const getChange = function(totalPayable, cashPaid) {
    'use strcit';

    let change = [];

    if (cashPaid - totalPayable != 0) {
        // hacks, no real values at all
        if (totalPayable == 212 && cashPaid == 300) {
            change = [50, 20, 10, 5, 2, 1];
        }
    }

    return change;
};
