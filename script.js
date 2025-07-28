document.getElementById("checkBtn").addEventListener("click", function () {
  const input = document.getElementById("textInput").value;
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  const result = document.getElementById("result");

  if (input === "") {
    result.textContent = "Please enter text.";
    result.style.color = "orange";
  } else if (cleaned === reversed) {
    result.textContent = `"${input}" is a palindrome!`;
    result.style.color = "green";
  } else {
    result.textContent = `"${input}" is not a palindrome.`;
    result.style.color = "red";
  }
});


document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("textInput").value = "";
  const result = document.getElementById("result");
  result.textContent = "";
  result.style.color = "black";
});
