function turnToThrow(arg) {
  const arr = [];
  for (let i = 0; i < arg.length - 3; i += 1) {
    if (arg[i] === 10) {
      arr.push(arg[i]);
      arr.push(0);
    } else {
      arr.push(arg[i]);
    }
  }
  arr.push(arg[arg.length - 3]); arr.push(arg[arg.length - 2]); arr.push(arg[arg.length - 1]);
  if (arr.length === 20) {
    arr[20] = 0;
  }
  return arr;
}

function scoreTurnWise(arr) {
  const eachTurnScore = [];
  for (let i = 0; i < 9; i += 1) {
    eachTurnScore.push(arr[2 * i] + arr[(2 * i) + 1]);
  }
  eachTurnScore[9] = arr[18] + arr[19] + arr[20];
  return eachTurnScore;
}

function calculateScore(arr, eachTurnScore) {
  let total;
  total = arr[18] + arr[19] + arr[20];

  for (let i = 8; i >= 0; i -= 1) {
    if (eachTurnScore[i] === 10) {
      if (arr[2 * i] === 10) {
        total = total + eachTurnScore[i] + eachTurnScore[i + 1];
      } else {
        total = total + eachTurnScore[i] + arr[2 * (i + 1)];
      }
    } else {
      total += eachTurnScore[i];
    }
  }
  return total;
}

function bowlingScore(arg) {
  const arr = turnToThrow(arg);
  console.log(arr);
  const eachTurnScore = scoreTurnWise(arr);
  console.log(eachTurnScore);
  return calculateScore(arr, eachTurnScore);
}
module.exports = bowlingScore;
