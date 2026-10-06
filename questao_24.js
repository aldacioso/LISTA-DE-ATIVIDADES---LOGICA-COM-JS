function solicitarNotaValida() {
  let nota;
  let valida = false;

  while (!valida) {
    nota = Number(prompt("Digite uma nota entre 0 e 10:"));

    if (nota >= 0 && nota <= 10) {
      valida = true;
    } else {
      console.log("Nota inválida");
    }
  }

  console.log("Nota aceita:", nota);
  return nota;
}

solicitarNotaValida();