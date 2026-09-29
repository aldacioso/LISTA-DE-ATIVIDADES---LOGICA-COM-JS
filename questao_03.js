function compararNumeros(numero1, numero2)
{
  if (numero1 > numero2)
  {
    console.log(numero1, "é maior que ", numero2);
  }
  else if (numero2 > numero1)
  {
    console.log(numero1, "é menor que ", numero2);
  }
  else (numero1 === numero2)
  {
    console.log(numero1, "é igual a ", numero2)
  }
}

compararNumeros(9,4);
compararNumeros(4,9);
compararNumeros(5,5);