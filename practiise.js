// const arr = [1, "a", { name: "John" }, "b", 1, { name: "John" }];

// const uniqueArr = [];

// arr.forEach((el) => {
//   // console.log('el',el);
//   if (typeof el == "object") {
//     // console.log('obj el',el);
//     const found = uniqueArr.find((uniqEl) => uniqEl.name == el.name);
//     if (!found) {
//       uniqueArr.push(el);
//     }
//   } else {
//     console.log("primitiv el", el);
//     if (!uniqueArr.includes(el)) {
//       uniqueArr.push(el);
//     }
//   }
// });

// console.log(uniqueArr);
// /////////////////////////////
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "object") {
//     const found = uniqueArr.find((uniqEl) => uniqEl.name == arr[i].name);
//     if (!found) uniqueArr.push(arr[i]);
//   } else {
//     if (!uniqueArr.includes(arr[i])) uniqueArr.push(arr[i]);
//   }
// }
// console.log("uniqArr", uniqueArr);
//////////////

// const uniqueArr = [];
// arr.forEach((el) => {
//   const found = uniqueArr.find((uniqEl) => uniqEl.name === el.name);
//   if (!found) uniqueArr.push(el);
// });
// console.log(uniqueArr);

// const uniqueArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   const find = uniqueArr2.find((uniqEl) => uniqEl.name == arr[i].name);
//   if (!find) {
//     uniqueArr2.push(arr[i]);
//   }
// }
// console.log("uniqueArr2", uniqueArr2);

/*
["Apple", "Banana", "apple", "Orange", "BANANA"]  

[{ id: 1 }, { id: 2 }, { id: 1 }, { id: 3 }]
[[1, 2, 2], [3, 4, [4, 5]], 1]
[{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'A' }]
[1, { id: 1 }, 2, { id: 1 }, 1]
[1, [2, 3], [2, 3], { a: 1, b: 2 }, { a: 1, b: 2 }]
*/

//oldugu kimi etsin
// const fruits = ["Apple", "Banana", "apple", "Orange", "BANANA", "Apple"];
// const UniqueFruits = [];

// fruits.forEach((el) => {
//   const findFruit = UniqueFruits?.find((copyEl) =>
//     copyEl?.toLocaleLowerCase().includes(el?.toLocaleLowerCase())
//   );
//   if (!findFruit) {
//     UniqueFruits.push(el);
//   }
// });

// console.log(UniqueFruits);

//
const cars = [
  { name: "optima", marka: "kia", id: 1 },
  { name: "x5", marka: "bmw", id: 2 },
  { name: "gl450", marka: "mercedes", id: 3 },
  { name: "k5", marka: "kia", id: 1 },
  { name: "x6", marka: "bmw", id: 2 },
];

const updatedCars = cars?.map((car) => {
  const newCars = [car];
  return { [car.id]: newCars };
});
console.log("updatedCars", updatedCars);

const uniqueupdatedCars = [];
updatedCars.forEach((updatedCar, i) => {
  console.log("updatedCar", updatedCar);

  console.log(i, updatedCar[i]);
});
/* 
[
    { 1:[
          { name: "optima", marka: "kia", id: 1 } ,
          { name: "k5", marka: "kia", id: 1 } 
       ]
     },
     { 2:[ 
         { name: "x5", marka: "bmw", id: 2 },
         { name: "x6", marka: "bmw", id: 2 },
        ]
     },
     { 3:[
        { name: "gl450", marka: "mercedes", id: 3 }
        ]
     }
]


*/
