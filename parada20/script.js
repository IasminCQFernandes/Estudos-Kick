function calcular() {
  var nome = document.getElementById("nome").value
  console.log(nome)

  var nota1 = parseFloat(document.getElementById("nota1").value)
  console.log(nota1)
  var nota2 = parseFloat(document.getElementById("nota2").value)
  console.log(nota2)
  var nota3 = parseFloat(document.getElementById("nota3").value)
  console.log(nota3)

  let media = (nota1 + nota2 + nota3) / 3

  if(media <=6){
    alert(`${nome}: Reprovado!  Media: ${media.toFixed(2)}`)
  }else if(media <=10){
    alert(`Aluno(a): ${nome} Aprovado(a)! - Media: ${media.toFixed(2)}`)
  }else{
    alert(`Nota inválida para o(a) aluno(a) ${nome}!`)
  }
}
