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
    if (arr[i * 2] === 10) {
      if (arr[(i + 1) * 2] === 10) {
        eachTurnScore.push(20 + arr[(i + 2) * 2]);
      } else {
        eachTurnScore.push(10 + arr[(i + 1) * 2] + arr[((i + 1) * 2) + 1]);
      }
    } else if ((arr[i * 2] + arr[(i * 2) + 1]) === 10) {
      eachTurnScore.push(10 + arr[(i + 1) * 2]);
    } else {
      eachTurnScore.push(arr[i * 2] + arr[(i * 2) + 1]);
    }
  }
  eachTurnScore[9] = arr[18] + arr[19] + arr[20];
  return eachTurnScore;
}

function calculateScore(eachTurnScore) {
  let total = 0;
  for (let i = 0; i < 10; i += 1) {
    total += eachTurnScore[i];
  }
  return total;
}
function calScore(arg) {
  const arr = turnToThrow(arg);
  // console.log(arr);
  const eachTurnScore = scoreTurnWise(arr);
  // console.log(eachTurnScore);
  return calculateScore(eachTurnScore);
}

// console.log(calScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
calScore([0, 8, 10, 9, 1, 2, 4, 10, 3, 7, 4, 5, 0, 0, 0, 10, 6, 3]);

module.exports = calScore;
