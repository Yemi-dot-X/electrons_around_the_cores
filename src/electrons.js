/*function electrons(dice) {

    if (dice.toString() === "1,2,3,4,5") {
        return 6;
    }

    if (dice.toString() === "2,2,3,3") {
        return 4;
    }

    if (dice.toString() === "6,6,4,4,1,3") {
        return 2;
    }

    if (dice.toString() === "6,6,4,4,1,3") {
        return 2;
    }

}
*/
function electrons(dice) {

    let sum = 0;

    for(let i = 0; i < dice.length; i++) {

        if(dice[i] === 3) {
            sum += 2;
        }

        if(dice[i] === 5) {
            sum += 4;
        }

    }

    return sum;
}
