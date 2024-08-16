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
//s4
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

//s8

function getFirstValue(arr) {
  //   return arr.slice(0, 1).shift();
  return arr.slice(0, 1).pop();
}

console.log("s", getFirstValue([3, 4, 5]));
