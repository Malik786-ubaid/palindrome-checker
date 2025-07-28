document.getElementById("checkBtn").addEventListener("click", function () {
  const text = document.getElementById("inputText").value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = text.split("").reverse().join("");
  const result = document.getElementById("result");

  if (text === "") {
    result.textContent = "Please enter some text!";
  } else if (text === reversed) {
    result.textContent = "Yes, it's a palindrome!";
  } else {
    result.textContent = "No, it's not a palindrome.";
  }
});
