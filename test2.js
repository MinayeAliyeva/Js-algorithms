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

const groupById = [];
cars.forEach((car) => {
  let group = groupById.find((item) => {
    console.log("item", item);
    return Object.keys(item) == car.id;
  });
  if (!group) {
    group = { [car.id]: [] };
    groupById.push(group);
  }
  group[car.id].push(car);
});
console.log("groupById", groupById);

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

const fruits = ["Apple", "Banana", "apple", "Orange", "BANANA"];
const uniqueFruits = [];

fruits.forEach((fruit) => {
  const findFruit = uniqueFruits.find((uniqFruit) =>
    uniqFruit.toLocaleLowerCase().includes(fruit.toLocaleLowerCase())
  );
  if (!findFruit) {
    uniqueFruits.push(fruit);
  }
});
console.log("uniqueFruits", uniqueFruits);
////////
const ides = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 3 }];
const uniqueIdes = [];
ides.forEach((idObj) => {
  const find = uniqueIdes.find((obj) => obj.id == idObj.id);
  if (!find) {
    uniqueIdes.push(idObj);
  }
});
console.log("uniqueIdes", uniqueIdes);

/*[[1, 2, 2], [3, 4, [4, 5]], 1] gibi iç içe geçmiş dizilerden oluşan bir dizide,
 tekrarlanan alt dizileri veya elemanları nasıl kaldırabilirsiniz*/

const nestedArr = [[1, 2, 2], [3, 4, [4, 5]], 1];

/*

[{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'A' }] gibi id ve name özelliklerine sahip nesnelerden oluşan bir dizide,
  hem id hem de name özelliklerine göre tekrarlanan nesneleri nasıl kaldırabilirsiniz?

*/
const array = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];
const uniqeArray = [];

array.forEach((obj) => {
  const check = uniqeArray.find(
    (findObj) => findObj.id == obj.id || findObj.name == obj.id
  );
  if (!check) {
    uniqeArray.push(obj);
  }
});
console.log("uniqeArray", uniqeArray);

/*
[1, { id: 1 }, 2, { id: 1 }, 1] gibi hem sayılar hem de nesneler içeren bir diziyi nasıl benzersizleştirirsiniz
*/
const fiexArr = [1, { id: 1 }, 2, { id: 1 }, 1];
const returnUniqueArr = [];
fiexArr.forEach((el) => {
  if (typeof el == "object") {
    const find = returnUniqueArr.find((obj) => obj.id == el.id);
    if (!find) returnUniqueArr.push(el);
  } else {
    const check = returnUniqueArr.includes(el);
    if (!check) {
      returnUniqueArr.push(el);
    }
  }
});
console.log("returnUniqueArr", returnUniqueArr);


/*
[1, [2, 3], [2, 3], { a: 1, b: 2 }, { a: 1, b: 2 }] gibi hem alt diziler hem de 
nesneler içeren bir dizide tekrarlanan elemanları nasıl kaldırabilirsiniz?
*/