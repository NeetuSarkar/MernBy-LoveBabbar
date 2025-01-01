// async function getData() {
//   setTimeout(function () {
//     console.log("I am inside the TimeOut Function");
//   }, 3000);
// }

// let output = getData();
// console.log(output);

//await - ?

//fetch API
//Provide an interface for fetching resourses over the internet

async function getData() {
  //get request - async
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );

  //parse json - async
  let data = await response.json();
  console.log(data);
}

getData();

//scenario:
//prepare url/ api endpoint -> sync
//fetch data -> network call -> async
//process  data -> sync
