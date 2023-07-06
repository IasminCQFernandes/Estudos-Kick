function comparar() {
  let x = document.getElementById("num1").value
  let y = document.getElementById("num2").value
  let subtracao = x - y

  let div = document.getElementById("resp")
  if (x == y) {
    div.innerHTML = "numeros iguais"
  } else if (x < y) {
    div.innerHTML = "favor colocar os números em ordem crescente"
  } else {
    div.innerHTML = "numeros diferentes e sua diferença é: " + subtracao
  }
}
