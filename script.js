function generateNumber() {

  const min = parseInt(document.getElementById("input-min").value, 10)
  const max = parseInt(document.getElementById("input-max").value, 10)
  const numberResult = Math.floor(Math.random() * (max - min + 1)) + min;
  
  if ( min <= max ) {
    document.getElementById("resultado").innerHTML = numberResult;
    document.getElementById("textResult").innerHTML = "O Sortudo do dia é:"
  } else {
    alert ("O Primeiro número deve ser menor que o Segundo")
  }
}