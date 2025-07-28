document.getElementById("textInput").addEventListener("input", function () {
  const input = this.value;
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  const result = document.getElementById("result");

  if (input === "") {
    result.textContent = "";
    result.style.color = "black";
  } else if (cleaned === reversed) {
    result.textContent = `"${input}" is a palindrome!`;
    result.style.color = "green";
  } else {
    result.textContent = `"${input}" is not a palindrome.`;
    result.style.color = "red";
  }
});
