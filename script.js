document.getElementById("checkBtn").addEventListener("click", function () {
  const input = document.getElementById("textInput").value;
  const reversed = input.split("").reverse().join("");
  const result = document.getElementById("result");

  if (input === "") {
    result.textContent = "Please enter text.";
    result.style.color = "orange";
  } else if (input === reversed) {
    result.textContent = `"${input}" is a palindrome!`;
    result.style.color = "green";
  } else {
    result.textContent = `"${input}" is not a palindrome.`;
    result.style.color = "red";
  }
});
