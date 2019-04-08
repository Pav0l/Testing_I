const uuid = require('uuid');

function sum(...numbers) {
  // return numbers.reduce((acc, el) => acc + el, 0);
  return { result: numbers.reduce((acc, el) => acc + el, 0) };
}

function makeUser(name, age) {
  // how do you test this condition
  if (typeof name !== 'string') {
    throw new Error('string required for name argument');
  }

  if (typeof age !== 'number' || isNaN(age)) {
    throw new Error('number required for age argument');
  }

  return {
    id: uuid(),
    fullName: name,
    age,
  };
}

function callWithDelay(cb) {
  setTimeout(cb, 2000);
}

function returnsPromise(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve('even');
    } else {
      reject('odd');
    }
  });
}

function returnsPromiseWithTimeout(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve('even');
      } else {
        reject('odd');
      }
    }, 1000);
  });
}

module.exports = {
  sum,
  makeUser,
  callWithDelay,
  returnsPromise,
  returnsPromiseWithTimeout,
};
