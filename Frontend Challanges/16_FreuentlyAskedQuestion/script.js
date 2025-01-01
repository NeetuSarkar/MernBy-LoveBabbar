// Select all question headings
const headings = document.querySelectorAll(".heading");

headings.forEach((heading) => {
  heading.addEventListener("click", () => {
    // Get the associated answer and expand button
    const answer = heading.nextElementSibling;
    const expandButton = heading.querySelector(".expand-button");

    // Toggle visibility of the answer
    if (answer.style.display === "block") {
      answer.style.display = "none";
      expandButton.textContent = "+"; // Change to plus when collapsed
    } else {
      answer.style.display = "block";
      expandButton.textContent = "-"; // Change to minus when expanded
    }
  });
});
