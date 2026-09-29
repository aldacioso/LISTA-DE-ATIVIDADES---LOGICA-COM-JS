function classificarNota(nota)
{
  if (nota >= 7 && nota <= 10)
  {
    console.log("Aprovado!");
  }
  else if (nota >= 5 && nota <= 7)
  {
    console.log("Recuperacação!")
  }
  else if (nota >=0 && nota < 5)
  {
    console.log("Revisão necessária!")
  }

  else (nota < 0 || nota > 10)
  {
    console.log("Nota inválida!")
  }
}

classificarNota(8);
classificarNota(6);
classificarNota(3);
classificarNota(-1);
classificarNota(11);