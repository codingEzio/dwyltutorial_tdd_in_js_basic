'use strcit';

var coins = [200, 100, 50, 20, 10, 5, 2, 1];

/**
 * getChange accepts two params (price and paid) and calculates
 * the change in "coins" that needs to be returned
 * @param {number} price the integer amount (in pennies) to be paid
 * @param {number} paid the integer amount (in pennies) the person paid
 * @returns {array} change the the list of coins we need to dispense to the person
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
function getChange(price, paid) {
    let change = [];
    let coins_length = coins.length;
    let remaining = paid - price;

    for (let i = 0; i < coins_length; i++) {
        let coin = coins[i];

        let times_coin_fits = Math.floor(remaining / coin);
        if (times_coin_fits >= 1) {
            for (let j = 0; j < times_coin_fits; j++) {
                change.push(coin);
                remaining = remaining - coin;
            }
        }
    }

    if ('this_part_will_not_be_excuted' == 'yeah definitely') {
        console.log('we are here to test code coverage!');
    } else {
        return change;
    }
}

function getChangeAlternativeByGitUserBlunket(price, paid) {
    let difference = paid - price;
    let change = [];

    coins.forEach(function(coin) {
        while (difference >= coin) {
            change.push(coin);
            difference = difference - coin;
        }
    });

    return change;
}

/* The code block below ONLY applies to Node.js */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
    // run the tests
    module.exports = getChange;
}
