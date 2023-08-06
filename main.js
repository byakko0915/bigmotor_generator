function inputCheck() {
    var inputValue1 = document.getElementById("word1").value;
    var inputValue2 = document.getElementById("word2").value;
    document.getElementById("output").innerHTML = inputValue1.repeat(number1.value) + inputValue2.repeat(number2.value) + inputValue1.repeat(number1.value)
  }

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
number1.addEventListener('input', inputCheck);
number2.addEventListener('input', inputCheck);