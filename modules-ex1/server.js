const operations = require('./operations');
console.log(operations.var1);
console.log(operations.var2);

const funcoes = require('./funcoes');
const resultado = funcoes(1);
console.log(resultado.msg, resultado.value);

const funcoes2 = require('./funcoes2');
const add = funcoes2.adicao(5, 7);
const sub = funcoes2.subtracao(7, 3);

console.log(add, sub);