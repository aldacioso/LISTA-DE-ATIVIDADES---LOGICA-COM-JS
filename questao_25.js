function somarAteZero() {
  let soma = 0;
  let quantidade = 0;
  let continuar = true;

  while (continuar) {
    const numero = Number(prompt("Digite um número (0 para encerrar):"));

    if (numero === 0) {
      continuar = false;
    } else {
      soma += numero;
      quantidade++;
    }
  }

  console.log("Soma:", soma);
  console.log("Quantidade:", quantidade);
}

somarAteZero();