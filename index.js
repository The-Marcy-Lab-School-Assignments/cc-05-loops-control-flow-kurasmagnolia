// Question 1
const multiplesOfSixAndNine = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
};

console.log("\n");
console.log("Question 1:");
multiplesOfSixAndNine();

// Question 2
const greaterNum = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 > num2) {
      return num1;
    } else if (num1 < num2) {
      num2;
    } else if (num1 === num2) {
      return `both intergers are equal`;
    }
  } else {
    return null;
  }
};

console.log("\n");
console.log("Question 2:");
console.log(greaterNum(10, 7)); //returns 10
console.log(greaterNum(1.14, 1.14)); //returns "both integers are equal"
console.log(greaterNum("21", 21)); //returns null
console.log(greaterNum("21", "21")); //returns null

// Question 3
const sumOfFourAndSix = () => {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      sum += i;
    }
  }
  console.log(sum);
};

console.log("\n");
console.log("Question 3:");
sumOfFourAndSix();

// Question 4
const oddAndEvenToN = (num) => {
  for (let i = 0; i <= num; i++)
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
};

console.log("\n");
console.log("Question 4:");
oddAndEvenToN(5);

// Question 5
const sumOfNotDivisibleByTen = (num) => {
  let sum = 0;

  for (let i = 1; i <= 1000; i++) {
    if (i % 10 !== 0) {
      sum += i;
    }
  }
  return sum;
};

console.log("\n");
console.log("Question 5:");
console.log(sumOfNotDivisibleByTen()); //returns 450000

// Question 6
const greaterNumber = (num1, num2, num3, num4) => {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    typeof num4 !== "number"
  ) {
    return null;
  }

  if (num1 === num2 && num2 === num3 && num3 === num4) {
    return "all integers are equal";
  }

  if (
    (num1 === num2 && num2 === num3) ||
    (num1 === num2 && num2 === num4) ||
    (num1 === num3 && num3 === num4) ||
    (num2 === num3 && num3 === num4)
  ) {
    return "three integers are equal";
  } else if (num1 === num2 || num2 === num3 || num3 === num4) {
    return "two integers are equal";
  } else {
    return Math.max(num1, num2, num3, num4);
  }
};

console.log("\n");
console.log("Question 6:");
console.log(greaterNumber(10, 7, 16, 80)); //returns 80
console.log(greaterNumber(1.14, 1.14, 5, 7)); //returns "two integers are equal"
console.log(greaterNumber(1.14, 1.14, 1.14, 7)); //returns "three integers are equal"
console.log(greaterNumber("21", 21, 60, 3)); //returns null

// Bonus Questions
const multiplesOfFourAndSix = () => {
  let total = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      if (i % 2 === 0) {
        total.push(i);
      }
    }
  }
  return total;
};

console.log("\n");
console.log("Bonus 1:");
console.log(multiplesOfFourAndSix()); // returns [12, 24, 36, 48,60, 72, 84, 96]

const countMultiplesOfTwo = (array) => {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
};

console.log("\n");
console.log("Bonus 2:");
countMultiplesOfTwo([12, 4, 5, 7, 11, 20]);
