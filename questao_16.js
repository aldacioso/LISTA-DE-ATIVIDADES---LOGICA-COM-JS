function somarAte(limite)
{
  let soma = 0;

  for (let i = 1; i <= limite; i++)
    {
      soma += i;
    }

  return soma

}

console.log(somarAte(10));
console.log(somarAte(100));
console.log(somarAte(1000));