function classificarNumero(numero)
{
  if (numero < 0)
  {
    console.log(numero, "Negativo");
  }
  else if (numero === 0) {
    console.log(numero, "Zero");
  } 
  else (numero > 0) 
  {
    console.log(numero, "Positivo");
  }
}

classificarNumero(8);
classificarNumero(-3);
classificarNumero(0);