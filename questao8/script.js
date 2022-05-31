function XPTO(quantos) {
  const x = ["AB", "BC", "CD", "DE"];
  str = " ";
  for (i = quantos - 1; i >= 0; i--) {
    str += " " + x[i];
  }
  return str;
}
document.getElementById("box").innerHTML += XPTO(4);

console.log(XPTO());

//foi corrigido a sintaxe da const x, que estava sem "", em conjunto com o index.html.
