let var1 = "30";
let var2 = 5;

let resultado1 = var1 - var2;
let resultado2 = var1 + var2;

console.log(5+5);

console.log(var1 * var2);
console.log(var1 / var2);

console.log(var1 - var2);
console.log(typeof(resultado1));

console.log(var1 + var2);
console.log(typeof(resultado2));


let variavelObjeto ={
    nome: "João Paulo",
    idade: 18,
    altura: 1.73,
    cpf: "05202131143",
    endereco: {
        rua: "abc",
        bairro: "ujgy",
        numero: 1,
        apartamento: {
            aaaa:"ddd",
            bbbb: "gvdsvv"
        }
    }
}

if(variavelObjeto.idade >= 18) {
    console.log("Pode entrar no meu site!")
} else {
    console.log("Não pode entrar no meu site!")
}

console.log(variavelObjeto);


/*
let variavel1 = 0;

const PI = 3.14;

console.log(typeof(variavel1));

PI = 3.15;
*/