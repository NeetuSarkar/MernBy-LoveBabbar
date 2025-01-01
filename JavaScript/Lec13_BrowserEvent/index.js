// function ChangeText(event) {
//   console.log(event);
//   let fpara = document.getElementById("fpara");
//   fpara.textContent = "Hello Neetu";
// }

// let fpara = document.getElementById("fpara");

// fpara.addEventListener("click", ChangeText);

// let anchorElement = document.getElementById("fanchor");

// anchorElement.addEventListener("click", function (event) {
//   event.preventDefault();
//   anchorElement.textContent = "Click done bhai";
// });

// let paras = document.querySelectorAll("p");

function alertPara(event) {
  alert("You have clicked on para: " + event.target.textContent);
}

// for (let i = 0; i < paras.length; i++) {
//   let para = paras[i];
//   para.addEventListener("click", alertPara);
// }

let mydiv = document.getElementById("wrapper");

document.addEventListener("click", alertPara);
