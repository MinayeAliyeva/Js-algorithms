// 1. Create a function that takes an array containing only numbers and return the first element.
//s1
function getFirstValue(arr) {
  return arr[0];
}
getFirstValue([1, 2, 3]);
//s2
// Note: modify orginal array
function getFirstValue(arr) {
  return arr.shift();
}
getFirstValue([1, 2, 3]);
//s3
//Note:modify orginal array
function getFirstValue(arr) {
  return arr?.find((el) => el !== undefined);
}
getFirstValue([1, 2, 3]);
//s4 unmodify orginal array
function getFirstValue(arr) {
  return arr?.filter((x) => typeof x !== undefined).shift();
}

getFirstValue([1, 2, 3]);
// s5
// Note:splice(index,deletedCount,addItem,...)  bir diziden kaldırılan öğeleri döndürür modify orginal array
const arr = [1, 2, 3];
function getFirstValue(arr) {
  //   return arr.splice(0, 2, 5, { name: "h" });
  return arr?.splice(0, 1)[0];
}
console.log("splicee", getFirstValue(arr)); // [ 1, 2 ]
console.log("arr", arr); //[ 5, { name: 'h' }, 3 ]

//s6
//ES6 destructuring
let [first] = [1, 2, 3];
//s7
// array.find((e) => !!e); // return the first element
// since "find" return the first element that matches the filter && !!e match any element.
// Note This works only when the first element is not a "Falsy" : null, false, NaN, "", 0, undefined

//s8 Note: unmodify orginal array
function getFirstValue(arr) {
  //   return arr.slice(0, 1).shift();
  return arr.slice(0, 1).pop();
}

console.log("s", getFirstValue([3, 4, 5]));

//s9
function getFirstValue(arr) {
  return arr.at(0);
}
console.log("at", getFirstValue([3, 4, 5]));

//////////////////////////////////////////////////////////////////
//Reminder
const findReminder = (num1, num2) => {
  if (num2 == 0) {
    return "Error";
  }
  return num1 % num2;
};

console.log("reminder", findReminder(2, 3));
//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
  return (base * height) / 2;
}
triArea(2, 3);

//Create a function that takes two numbers as arguments and returns their sum.
function addition(a, b) {
  return a + b;
}
addition(2, 3);
//Create a function which returns the number of true values there are in an array.
//s1
const findTrulyNumbers = (arr) => {
  return arr?.filter(Boolean).length;
};
console.log(
  "findTrulyNumbers",
  findTrulyNumbers([true, false, false, true, false])
);
//s2
const findTrulyNumbers2 = (arr) => {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === true) {
      count++;
    }
  }
  return count;
};
console.log("test,", findTrulyNumbers2([true, false, false, true, false]));

//Remove dublicates from an array
//s1
const removeDublicates = (arr) => {
  return arr?.filter((el, i) => arr.indexOf(el) == i);
};
console.log("removeDublicates", removeDublicates([1, 2, 2, 3, 4, "banana", 1]));
//s2

const removeDublicates2 = (arr) => {
  return [...new Set(arr)];
};
console.log(
  "removeDublicates2",
  removeDublicates2([1, 2, 2, 3, 4, "banana", 1])
);

//s3

const removeDublicates3 = (arr) => {
  let unique = arr?.reduce((acc, curr) => {
    if (acc.indexOf(curr) < 0) acc.push(curr);
    return acc;
  }, []);
  return unique;
};

console.log(
  "removeDublicates3",
  removeDublicates3([1, 2, 2, 3, 4, "banana", 1])
);

//s4
const removeDublicates4 = (arr) => {
  let uniques = [];
  arr?.forEach((el) => {
    if (!uniques.includes(el)) uniques.push(el);
  });
  return uniques;
};
console.log(
  "removeDublicates4",
  removeDublicates3([1, 2, 2, 3, 4, "banana", 1])
);
