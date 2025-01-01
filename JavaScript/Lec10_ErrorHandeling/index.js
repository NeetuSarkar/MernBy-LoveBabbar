// //compile time error

// //syntax error
// // console.log(1;

// //Runtime error
// //Reference error
// // console.log(x);

// try {
//   console.log("Try block starts here");
//   console.log(x);
//   console.log("Try block ends here");

//   //a
//   //b
//   //c
// } catch (e) {
//   //define krte h, error k sath app kya karna chahte h
//   //retry logic
//   //fallback mechanism
//   //logging
//   //custom error
//   console.log("I AM INSIDE CATCH BLOCK");
//   console.log("Your error is here: ", e);
// } finally {
//   console.log("I will run everytime, as i am finally block");
// }

//let's create a custom error

try {
  //Reference error
  console.log(x);
} catch (err) {
  throw new Error("Bhai phele decelare kar do fir print karna");
}
