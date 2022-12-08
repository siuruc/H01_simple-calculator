function calculate(a) {
  var x = document.getElementById("input1").value;
  var y = document.getElementById("input2").value;
  var op = a;
  x = Number(x);
  y = Number(y);
  while (x != "" && y != "") {
    if (op == "add") {
      return (document.getElementById("result").innerHTML = x + y);
    } else if (op == "sub") {
      return (document.getElementById("result").innerHTML = x - y);
    } else if (op == "mul") {
      return (document.getElementById("result").innerHTML = x * y);
    } else if (op == "div") {
      return (document.getElementById("result").innerHTML = x / y);
    } else if (op == "mod") {
      return (document.getElementById("result").innerHTML = x % y);
    } else if (op == "exp") {
      return (document.getElementById("result").innerHTML = x ** y);
    }
  }
  document.getElementById("result").innerHTML = "Give 2 numbers";
}
