function encontrarMaiorNumero() {
  let maior = Number(prompt("Digite o 1º número:"));

  for (let i = 2; i <= 5; i++) {
    const numero = Number(prompt("Digite o " + i + "º número:"));

    if (numero > maior) {
      maior = numero;
    }
  }

  console.log("Maior:", maior);
  return maior;
}

encontrarMaiorNumero();