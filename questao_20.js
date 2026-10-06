function simularCrescimento(rodadas) {
  let unidade = 1;
  let i = 1;

  for (let i = 1; i <= rodadas; i++)
  {
    console.log("Rodada ",i, ": ", unidade);
    unidade *= 2;
  } 
}

simularCrescimento(10);