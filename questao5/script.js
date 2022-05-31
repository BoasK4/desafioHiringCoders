var exemplo = "A";
outro = "A";
function minhaFuncao() {
  var exemplo = "B";
  return exemplo;
}
function minhaFuncao2() {
  outro = "B";
  return outro;
}
console.log(exemplo);
console.log(minhaFuncao());
console.log(outro);
console.log(minhaFuncao2());
console.log(outro);

// nessa questao, só foi adicionado o parênteses após o console.log(minhaFuncao2()), para saber a resposta
