function verificarBeneficio(emprestimos, oficinas)
{
  if (emprestimos >= 10 || oficinas >= 3)
  {return "Tem direito ao benefício";}
  else{return "Não tem direito";}
}

console.log(verificarBeneficio(1, 1));
console.log(verificarBeneficio(10, 1));console.log(verificarBeneficio(1, 3));console.log(verificarBeneficio(10, 4));