function outterFunction() {
  let name = "Mozilla";
  function innerFunction() {
    let name = "Neetu";
    console.log(name);
  }
  displayName();
}

outterFunction();
