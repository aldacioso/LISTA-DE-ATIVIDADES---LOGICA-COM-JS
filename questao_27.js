function contarFaixasDeNotas()
{
  let altas = 0;
  let medias = 0;
  let baixas = 0;

  for (let i = 1; i <= 6; i++)
  {
    const nota = Number(prompt("Digite a nota do " + i + "º estudante:"));

    if (nota >= 7)
    {
      altas++;
    }
    else if (nota >= 5)
    {
      medias++;
    }
    else
    {
      baixas++;
    }
  }

  console.log("Maiores ou iguais a 7:", altas);
  console.log("Entre 5 e 7:", medias);
  console.log("Menores que 5:", baixas);
}

contarFaixasDeNotas();