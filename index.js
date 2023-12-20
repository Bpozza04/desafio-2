let saldoDeVitorias = diferenca(60, 50);
function diferenca(num1, num2) {
     return  num1 - num2;
}
let nivel = ""; 
if (saldoDeVitorias <= 10){
  nivel = "Ferro"; 
} else if (saldoDeVitorias >= 11 &&  saldoDeVitorias <= 20){
  nivel = "Bronze";
} else if (saldoDeVitorias >= 21 &&  saldoDeVitorias <= 50){
  nivel = "Prata";
} else if (saldoDeVitorias >= 51 &&  saldoDeVitorias <= 80){
  nivel = "Ouro";
} else if (saldoDeVitorias >= 81 &&  saldoDeVitorias <= 90){
  nivel = "Diamante";
} else if (saldoDeVitorias >= 91 &&  saldoDeVitorias <= 100){
  nivel = "Lendario";
} else { 
  nivel = "Imortal";
}
console.log("O Heroi tem saldo de " + saldoDeVitorias + " esta no nivel de " + nivel)
