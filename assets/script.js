function calcularimc() {
  // Pega o peso e altura que o usuário digitou
  let nome = parseFloat(document.getElementById("nome")).value;
  let altura = parseFloat(document.getElementById("altura").value);
  let peso = parseFloat(document.getElementById("peso").value);

  // Calcula o IMC

  let imc = peso / (altura * altura);

  // Verifica o peso ideal
  let text = "";
  if (imc < 18.5) {
    text = "Voce esta só o palito";
  } else if (imc >= 18.5 && imc <= 24.9) {
    text = "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    text = "Voce esta gordo";
  } else if (imc >= 30 && imc <= 34.9) {
    text = " Voce esta muitoooo Gordoooo";
  } else if (imc >= 35 && imc <= 39.9) {
    text = "Voce esta Obeso";
  } else {
    text = "Voce esta Obeso Morbido";
  }
  document.getElementById("resultado").innerHTML = 
  ` seu IMC é:  ${imc.toFixed(2)}.  ${text}`;
}
