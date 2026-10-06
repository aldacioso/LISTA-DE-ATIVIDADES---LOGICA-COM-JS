function verificarCodigoDeAcesso() 
{
  const codigoCorreto = "javascript123";
  let tentativas = 0;
  let acertou = false;

  while (tentativas < 3 && !acertou) 
  {
    const codigo = prompt("Digite o código de acesso:");
    tentativas++;

    if (codigo === codigoCorreto)
    {
      acertou = true;
      console.log("Acesso permitido");
    } else if (tentativas < 3) 
    {
      console.log("Código incorreto. Tentativas restantes:", 3 - tentativas);
    }
  }

  if (!acertou) 
  {
    console.log("Acesso bloqueado");
  }
}

verificarCodigoDeAcesso();