let monthlyBtn = document.querySelector(".monthly");
let yearlyBtn = document.querySelector(".yearly");
let proPriceDispaly = document.getElementById("pro-price");
let businessPriceDisplay = document.getElementById("business-price");
let monthYearToggle = document.querySelectorAll(".month-year");

let monthlyProPrice = 34;
let monthlyBusinessPrice = 56;

monthlyBtn.addEventListener("click", () => {
  if (!monthlyBtn.classList.contains("package")) {
    monthlyBtn.classList.add("package");
    yearlyBtn.classList.remove("package");
    displayPriceMonthly();
  }
});

yearlyBtn.addEventListener("click", () => {
  if (!yearlyBtn.classList.contains("package")) {
    yearlyBtn.classList.add("package");
    monthlyBtn.classList.remove("package");
    displayPriceYearly();
  }
});

function displayPriceYearly() {
  proPriceDispaly.textContent = `$${monthlyProPrice * 12 - 100}`;
  businessPriceDisplay.textContent = `$${monthlyBusinessPrice * 12 - 200}`;
  monthYearToggle.forEach((ele) => {
    ele.textContent = "per year";
  });
}

function displayPriceMonthly() {
  proPriceDispaly.textContent = `$${monthlyProPrice}`;
  businessPriceDisplay.textContent = `$${monthlyBusinessPrice}`;
  monthYearToggle.forEach((ele) => {
    ele.textContent = "per month";
  });
}
