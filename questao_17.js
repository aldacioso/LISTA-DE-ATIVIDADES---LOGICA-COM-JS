function mostrarPares(limite)
{
  for (let i = 0; i <= limite; i++)
  {
    if (i % 2 == 0)
    {
      console.log(i, " é um número par");
    }
  }
}

mostrarPares(10);
mostrarPares(9);