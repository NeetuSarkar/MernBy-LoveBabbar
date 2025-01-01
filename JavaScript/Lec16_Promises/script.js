// let firstPromise = new Promise((resolve, reject) => {
//   console.log("Neetu");
// });

// function sayMyName() {
//   console.log("My Name is Neetu Sarkar");
// }

// setTimeout(sayMyName, 10000);

// let firstPromise = new Promise((resolve, reject) => {
//   setTimeout(function sayMyName() {
//     console.log("My Name is Love Babbar");
//   }, 15000);
//   resolve(1);
// });

// let promise1 = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Promise Fuilfilled");
//   } else {
//     reject("Promise rejected");
//   }
// });

// promise1
//   .then((message) => {
//     console.log("Then ka message is Message");
//   })
//   .catch((error) => {
//     console.log("Error: " + error);
//   });

// promise1
//   .then((message) => {
//     console.log("first msg: " + message);
//     return "Promise fulfilled second message";
//   })
//   .then((message) => {
//     console.log("second msg: " + message);
//     return "Promise fulfilled third message";
//   })
//   .then((message) => {
//     console.log("third msg: " + message);
//   })
//   .finally((message) => {
//     console.log("Mai final hu chalunga pakkas");
//   });

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "First");
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Second");
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "Third");
});

Promise.all([promise1, promise2, promise3]).them((values) => {
  console.log(values);
});
