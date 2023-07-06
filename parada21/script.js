function tabuada() {
  var input = document.getElementById("input").value

  var div = document.getElementById("resultado")
  console.log(input)

  for (let mult = 0; mult <= 10; mult++) {
    div.innerHTML += `<p> ${input} x ${mult} = ${input * mult}`
  }
}
