function somarCincoValores()
{
  let n1 = Number(prompt("Número 1:"));
  let soma = n1;
  let n2 = Number(prompt("Número 2:"));
  soma = soma + n2;
  let n3 = Number(prompt("Número 3:"));
  soma = soma + n3;
  let n4 = Number(prompt("Número 4:"));
  soma = soma + n4;
  let n5 = Number(prompt("Número 5:"));
  soma = soma + n5;

  return soma;

}

console.log(somarCincoValores());