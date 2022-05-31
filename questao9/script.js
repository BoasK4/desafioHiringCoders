function classificacao() {
  return function (obj1, obj2) {
    var a = obj2["nota"] - obj1["nota"];
    return a !== 0 ? a : obj1["idade"] - obj2["idade"];
  };
}
var aprovados = [
  { candidato: "Renata Soares", nota: 7.8, idade: 29 },
  { candidato: "Marcos Teixeira", nota: 7.8, idade: 26 },
  { candidato: "Priscila Gomes", nota: 7.8, idade: 30 },
  { candidato: "João Oliveira", nota: 7.8, idade: 27 },
  { candidato: "Adriana Telles", nota: 7.8, idade: 28 },
];
aprovados.sort(classificacao());
console.log(aprovados[1].candidato);

//nessa questao, foi substituído o document.write por console.log, para saber a posição do segundo aprovado, levando em conta que o indice é contado a partir de 0, o 1 é o segundo colocado.
