/*
["Apple", "Banana", "apple", "Orange", "BANANA"]  

[{ id: 1 }, { id: 2 }, { id: 1 }, { id: 3 }]
[[1, 2, 2], [3, 4, [4, 5]], 1]
[{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'A' }]
[1, { id: 1 }, 2, { id: 1 }, 1]
[1, [2, 3], [2, 3], { a: 1, b: 2 }, { a: 1, b: 2 }]
const arr = [1, "a", { name: "John" }, "b", 1, { name: "John" }];

*/

const cars = [
  { name: "optima", marka: "kia", id: 1 },
  { name: "x5", marka: "bmw", id: 2 },
  { name: "gl450", marka: "mercedes", id: 3 },
  { name: "k5", marka: "kia", id: 1 },
  { name: "x6", marka: "bmw", id: 2 },
];

const groupByID = [];
cars.forEach((car) => {
  let group = groupByID.find((item) => {
    console.log("item", item);
    console.log("Object.keys(item)", Object.keys(item));
    return Object.keys(item)[0] == car.id;
  });
  console.log();
  
  if (!group) {
    group = { [car.id]: [] };
    groupByID.push(group);
  }
  group[car.id].push(car);
});
console.log(groupByID);
/*
step1
const groupByID = [];
 let group = undefined
 group={1:[]}
 const groupByID = [{1:[]}]

 step2
 const groupByID = [{1:[]}]
 const group={2:[]}
 const groupByID = [{1:[]},{2:[]}]

 step3
 const groupByID = [{1:[]},{2:[]}]
 const group={3:[]}
const groupByID = [{1:[]},{2:[]},{3:[]}]


step4
const groupByID = [{1:[]},{2:[]},{3:[]}]
const group=//
  group[car.id].push(car); bu kod calisir
*/



