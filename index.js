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
