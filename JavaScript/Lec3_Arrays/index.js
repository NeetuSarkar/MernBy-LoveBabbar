// let obj = {
//   name: "Neetu",
//   age: 23,
//   weight: 85,
//   height: "6ft 1in",
//   greet: function () {
//     console.log("hello jee kaise ho saare");
//   },
// };

// for (let key in obj) {
//   console.log(key, " ", obj[key]);
// }

// // console.log(obj.greet);
// // obj.greet();

// // let obj2 = obj;

// //creation of array

// let arr = [1, 2, 3, 4, 5];

// //array consturctor
// let brr = new Array("Neetu", 1, true);

// //push
// brr.push("Sarkar");

// //pop
// brr.pop();

// //shift
// brr.shift();

// //unshift
// brr.unshift("Neetu");

// brr.push(20);
// brr.push(40);
// brr.push(70);

// //slice
// // console.log(brr.slice(2, 4));

// //splice function

// // brr.splice(1, 2, "kunal");
// // console.log(brr);

// //map function

// let arr = [10, 20, 30];

// arr.map((num, index) => {
//   console.log(num);
//   console.log(index);
// });

// let ansArr = arr.map((number) => {
//   return number * number;
// });

// console.log(ansArr);

//filter
// let arr = [10, 20, 30, 11, 21, 44, 51];
// let evenArr = arr.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(evenArr);

// let arr = [1, 2, "love", "kunal", null];

// let ans = arr.filter((value) => {
//   if (typeof value === "string") {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(ans);

//Reduce
// let arr = [10, 20, 30, 40];

// let ans = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(ans);

//sort function

// let arr = [9, 1, 7, 4, 2, 8];
// // arr.sort((a, b) => b - a);
// arr.sort();

// console.log(arr);

// console.log(arr.indexOf(9));

// let arr = [10, 20, 30];

// arr.forEach((value, index) => {
//   console.log("Number: ", value, " Index: ", index);
// });

let arr = [10, 20, 30, 40];

for (let value of arr) {
  console.log(value);
}

let fullname = "Neetu";
for (let val of fullname) {
  console.log(val);
}
