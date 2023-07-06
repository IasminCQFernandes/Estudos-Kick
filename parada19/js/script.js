var div = document.getElementById("resp")

function verifica_idade() {
  let idade = document.getElementById("i_idade").value
  let text

  if (idade == "") {
    text = "preencha o campo"
  } else {
    if(idade >=18){
          text = "pode tirar a carteira"
    }else{
    text = "não pode tirar a carteira"
    }
  }

  div.innerHTML = text
}

