import CoinType from "../assets/CoinTypes";

function coinFlipper(): CoinType {
    const randomNumber: number = Math.random();

    //do coin logic
    if (randomNumber < .995 && randomNumber >= .5) { // 500-994
        return CoinType.headsCoin;
    } if (randomNumber > .005 && randomNumber < .5) { // 6-499
        return CoinType.tailsCoin;
    } if (randomNumber >= .995) { // 995-100
        return CoinType.headSideCoin;
    } if (randomNumber <= .005) { //0-5
        return CoinType.tailsSideCoin;
    } else {
        console.error('randomNumber value in coinFlipper was not set or value did not match any posible outcomes. Output of randomNumber: ' + randomNumber);
    };
}

//add test to verify each goes to correct enum when given number (to ensure the logic isn't changed accidenatly)

export default coinFlipper;