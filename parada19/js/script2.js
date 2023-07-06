function muda_cor(){
  let body = document.getElementById("corpo");
  let cor = document.getElementById("i_cor").value

  switch (cor) {
    case "1":
      body.style.backgroundColor = "#12130f"
      break;
    case "2":
      body.style.backgroundColor = "#5b9279";
      break;
    
    case "3":
      body.style.backgroundColor = "#8fcb9b";
      break;

    case "4":
      body.style.backgroundColor = "#eae6e5";
      break;

    default:
  }
}