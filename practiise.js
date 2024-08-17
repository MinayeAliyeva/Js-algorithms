const arr = [1, "a", { name: "John" }, "b", 1, { name: "John" }];

const uniqueArr = [];

arr.forEach((el) => {
  // console.log('el',el);
  if (typeof el == "object") {
    // console.log('obj el',el);
    const found = uniqueArr.find((uniqEl) => uniqEl.name == el.name);
    if (!found) {
      uniqueArr.push(el);
    }
  } else {
    console.log("primitiv el", el);

    if (!uniqueArr.includes(el)) {
      uniqueArr.push(el);
    }
  }
});

console.log(uniqueArr);
