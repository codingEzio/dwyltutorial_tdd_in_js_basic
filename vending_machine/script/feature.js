'use strcit';

var coins = [200, 100, 50, 20, 10, 5, 2, 1];
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

    return change;
}

function getChangeFunctional(price, paid) {
    // pass
}
