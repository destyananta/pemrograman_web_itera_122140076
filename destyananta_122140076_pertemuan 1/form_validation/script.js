document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  
  let isValid = true;
  
  if (name.length <= 3) {
      nameError.textContent = "Nama harus lebih dari 3 karakter.";
      isValid = false;
  }
  
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      emailError.textContent = "Email tidak valid.";
      isValid = false;
  }
  
  if (password.length < 8) {
      passwordError.textContent = "Password minimal 8 karakter.";
      isValid = false;
  }
  
  if (isValid) {
      alert("Form berhasil dikirim!");
      document.getElementById("myForm").reset();
  }
});
