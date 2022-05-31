//QUESTAO 1

let txt = "";
function funcao(value, index) {
  if (index % 2 == 0) {
    txt += value;
  }
}
function xpto(x) {
  x.forEach(funcao);
  return txt;
}
console.log(xpto([0, 1, 1, 2, 3, 5]));
