function electrons(dice) {
  let sum = 0;

  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 3) {
      sum += 2;
    }

    if (dice[i] === 5) {
      sum += 4;
    }
  }

  return sum;
}