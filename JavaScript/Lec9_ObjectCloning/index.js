let src = {
  age: 12,
  wt: 68,
  ht: 180,
};

let des = {};

for (let key in src) {
  let newKEY = key;
  let newValue = src[key];
  //insert newKey and value in dest and create a clone
  des[newKEY] = newValue;
}

console.log(src);
console.log(des);

// let des = Object.assign({}, src);
// src.age = 90;
// console.log(src);
// console.log(des);

// let des = { ...obj };
// obj.age = 90;

// console.log(obj);
// console.log(des);

// console.log(obj);

// obj.color = "White";
// console.log(obj);
