function iniciarMenu()
{
  let opcao = "";

  while (opcao !== "0")
  {
    opcao = prompt(
      "1 - Mostrar mensagem de boas-vindas\n" +
      "2 - Calcular o dobro de um número\n" +
      "0 - Encerrar"
    );

    if (opcao === "1")
    {
      console.log("Bem-vindo à oficina de JavaScript");
    }
    else if (opcao === "2")
    {
      const numero = Number(prompt("Digite um número:"));
      console.log("Dobro:", numero * 2);
    }
    else if (opcao === "0")
    {
      console.log("Programa encerrado");
    }
    else
    {
      console.log("Opção inválida");
    }
  }
}

iniciarMenu();