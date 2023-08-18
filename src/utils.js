import {random} from "lodash";


export function makeRiddle(options, riddleObject, operator) {
  const riddleObjectCopy = {...riddleObject};

  switch (operator) {
    case '+': {
      riddleObjectCopy.correct = riddleObjectCopy.firstValue + riddleObjectCopy.secondValue;
      break;
    }
    case '-': {
      riddleObjectCopy.correct = riddleObjectCopy.firstValue - riddleObjectCopy.secondValue;

      if (!options.allowNegatives && riddleObjectCopy.correct < 0) {
        [riddleObjectCopy.firstValue, riddleObjectCopy.secondValue] = [riddleObjectCopy.secondValue, riddleObjectCopy.firstValue];
        riddleObjectCopy.correct = riddleObjectCopy.firstValue - riddleObjectCopy.secondValue;
      }
      break;
    }
    case '*': {
      riddleObjectCopy.correct = riddleObjectCopy.firstValue * riddleObjectCopy.secondValue;
      break;
    }
    case '/': {
      while (riddleObjectCopy.secondValue === 0) {
        riddleObjectCopy.secondValue = random(0, 10);
      }

      riddleObjectCopy.correct = Math.trunc((riddleObjectCopy.firstValue / riddleObjectCopy.secondValue) * 100) / 100;

      while (!options.allowFractions && Math.trunc(riddleObjectCopy.correct) !== riddleObjectCopy.correct) {
        riddleObjectCopy.secondValue = random(0, 10);
        riddleObjectCopy.correct = Math.trunc((riddleObjectCopy.firstValue / riddleObjectCopy.secondValue) * 100) / 100;

        while (riddleObjectCopy.secondValue === 0) {
          riddleObjectCopy.secondValue = random(0, 10);
          riddleObjectCopy.correct = Math.trunc((riddleObjectCopy.firstValue / riddleObjectCopy.secondValue) * 100) / 100;
        }
      }
      break;
    }
  }

  return riddleObjectCopy;
}

export function makeAnswers(options, answersArray, operator, correct) {
  const answersArrayCopy = [...answersArray];
  const getResult = () => {
    let randomValueFirst = random(0, 10);
    let randomValueSecond = random(0, 10);
    let result = null;

    switch (operator) {
      case '+': {
        result = randomValueFirst + randomValueSecond;
        break;
      }
      case '-': {
        result = randomValueFirst - randomValueSecond;
        break;
      }
      case '*': {
        result = randomValueFirst * randomValueSecond;
        break;
      }
      case '/': {
        if (options.allowFractions) {
          while (randomValueSecond === 0) {
            randomValueSecond = random(0, 10);
          }

          result = Math.trunc((randomValueFirst / randomValueSecond) * 100) / 100;
        } else {
          result = random(0, 10);
        }
        break;
      }
    }

    return result;
  };

  for (let i = 0; i < 3; i++) {
    let result = getResult();

    while (answersArrayCopy.includes(result)) {
      result = getResult();
    }

    answersArrayCopy.push(result);
  }

  if (!answersArrayCopy.includes(correct)) {
    answersArrayCopy[random(0, answersArrayCopy.length - 1)] = correct;
  }

  return answersArrayCopy;
}
