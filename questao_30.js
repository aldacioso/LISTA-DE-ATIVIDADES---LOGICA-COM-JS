function registrarCompra()
{
  let quantidade = 0;
  let subtotal = 0;
  let continuar = true;

  while (continuar)
  {
    const valor = Number(prompt("Digite o valor do produto (0 para encerrar):"));

    if (valor === 0)
    {
      continuar = false;
    }
    else if (valor < 0)
    {
      console.log("Valor inválido: não é permitido valor negativo");
    }
    else
    {
      subtotal += valor;
      quantidade++;
    }
  }

  if (quantidade === 0)
  {
    console.log("Nenhum produto registrado");
  }
  else
  {
    let desconto = 0;

    if (subtotal >= 100)
    {
      desconto = subtotal * 0.1;
    }

    const total = subtotal - desconto;

    console.log("Quantidade de produtos:", quantidade);
    console.log("Subtotal:", subtotal);
    console.log("Desconto:", desconto);
    console.log("Total:", total);
  }
}

registrarCompra();