function verficarMeta(nota, frequencia)
{
  if (nota >= 7 && frequencia >= 75)
    {return "Meta cumprida";}
  else
  {return "Meta não atendida";}
}

console.log(verficarMeta(8,80));
console.log(verficarMeta(8,60));
console.log(verficarMeta(8,90));
console.log(verficarMeta(7,75));