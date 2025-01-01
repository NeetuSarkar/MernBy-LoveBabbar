function calculateDateDifference() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1; // Months are 0-based in JavaScript Date
  const year = parseInt(document.getElementById("year").value);

  // Validate inputs
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.getElementById("age").textContent = "Please enter a valid date.";
    return;
  }

  const startDate = new Date(year, month, day);
  const today = new Date();

  // Check if the start date is in the future
  if (startDate > today) {
    document.getElementById("age").textContent =
      "Date cannot be in the future.";
    return;
  }

  // Calculate the difference
  let ageYears = today.getFullYear() - startDate.getFullYear();
  let ageMonths = today.getMonth() - startDate.getMonth();
  let ageDays = today.getDate() - startDate.getDate();

  // Adjust for negative days and months
  if (ageDays < 0) {
    // Borrow days from the previous month
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
    ageMonths--;
  }
  if (ageMonths < 0) {
    ageMonths += 12;
    ageYears--;
  }

  // Display the result
  document.getElementById("RYear").textContent = ageYears;
  document.getElementById("RMonth").textContent = ageMonths;
  document.getElementById("RDay").textContent = ageDays;
  document.getElementById("age").style.display = "block";
}
