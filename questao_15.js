function calcularMedia()
{
  n1 = Number(prompt("N1: "));
  n2 = Number(prompt("N2: "));
  n3 = Number(prompt("N3: "));
  n4 = Number(prompt("N4: "));

  soma = n1+n2+n3+n4;
  media = soma / 4;

  return media;
}

console.log(calcularMedia());