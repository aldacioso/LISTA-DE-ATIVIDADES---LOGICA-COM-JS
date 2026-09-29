function calcularCompra(valorCompra)
{
  if (valorCompra < 200 && valorCompra > 0)
  {
    console.log("Valor original    = R$ ", valorCompra);
    console.log("Valor do desconto = R$ ", 0);
    console.log("Valor final       = R$ ", valorCompra);
  }
  else if (valorCompra >= 200)
  {
    console.log("Valor original    = R$ ", valorCompra);
    console.log("Valor do desconto = R$ ", (valorCompra / 100 * 10));
    console.log("Valor final       = R$ ", valorCompra - (valorCompra / 100 * 10));
  }
  else
  {
    console.log("Valor da compra inválido!");
  }
}

calcularCompra(150);
calcularCompra(200);
calcularCompra(250);
calcularCompra(-10);
