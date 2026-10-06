function calcularFatorial(limite)
{
  let fatorial = 1;

  if (limite === 0 || limite === 1)
  {
    return 1;
  }

  else 
  {
    for (let i = 2; i <= limite; i++)
    {
      fatorial *= i;
    }

    return fatorial;
  }
}

console.log(calcularFatorial(4));
console.log(calcularFatorial(1));
console.log(calcularFatorial(0));