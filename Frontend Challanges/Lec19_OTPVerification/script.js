const otpInputs = document.querySelectorAll(".otp-input input");
console.log(otpInputs);
let timeRemaining = 5 * 60;

otpInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "" && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});


//To verify the OTP
function verifyOTP() {
  // Collect OTP by concatenating the values of all input fields
  let otp = "";
  otpInputs.forEach((input) => (otp += input.value));
  if (otp.length < 4) {
    document.querySelector("#message").textContent = "Please enter a valid OTP";
  } else {
    document.querySelector("#message").textContent = "";
    alert(`Entered OTP is: ${otp}`);
  }
  // alert(`Entered OTP is: ${otp}`);
}


//When user clicks on the resend OTP button
function resendOTP() {
  document.querySelector("#message").textContent =
    "OTP send on registered mobile number 703****12";
  timeRemaining = 5 * 60;
}

const countdownInterval = setInterval(() => {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  document.getElementById("countdown").textContent = formattedTime;

  timeRemaining--;

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("message").textContent = "Time's up!";
  }
}, 1000);


//Try again message when time out

