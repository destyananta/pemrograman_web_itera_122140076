function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  let result;

  if (isNaN(num1)) {
      alert("Masukkan angka pertama yang valid");
      return;
  }

  if (operation !== "√" && isNaN(num2)) {
      alert("Masukkan angka kedua yang valid");
      return;
  }

  switch (operation) {
      case "+":
          result = num1 + num2;
          break;
      case "-":
          result = num1 - num2;
          break;
      case "*":
          result = num1 * num2;
          break;
      case "/":
          result = num2 !== 0 ? num1 / num2 : "Error: Pembagian dengan nol";
          break;
      case "%":
          result = num1 % num2;
          break;
      case "^":
          result = Math.pow(num1, num2);
          break;
      case "√":
          result = num1 >= 0 ? Math.sqrt(num1) : "Error: Akar dari bilangan negatif";
          break;
      default:
          result = "Operasi tidak dikenali";
  }
  
  document.getElementById("result").innerText = result;
}
