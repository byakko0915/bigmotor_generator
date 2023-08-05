function inputCheck() {
    var inputValue1 = document.getElementById("word1").value;
    var inputValue2 = document.getElementById("word2").value;
    document.getElementById("output").innerHTML = inputValue1.repeat(18) + inputValue2.repeat(9) + inputValue1.repeat(18)
  }