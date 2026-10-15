//     atividade 2 ﹌﹌﹌﹌﹌﹌﹌﹌

/* const nome = "Rafaela";
const idade = 17
const curso = "Desenvolvimento de Sistemas";
const aprovado = true;

console.log(nome);
console.log(idade);
console.log(curso);
console.log(aprovado);

*/



// Operadores de comparação ﹌﹌﹌﹌﹌﹌﹌﹌

/*
const idade = 18;

console.log(idade >= 18);
console.log(idade === 18);
console.log(idade < 18);
*/



// Operadores lógicos ﹌﹌﹌﹌﹌﹌﹌﹌

/*
const idade = 20;
const possuiIngresso = true;
const possuiConvite = false;

// Operador E (&&)
console.log(idade >= 18 && possuiIngresso);
// Resultado: true

// Operador OU (||)
console.log(possuiIngresso || possuiConvite);
// Resultado: true

// Operador NÃO (!)
console.log(!possuiIngresso);
// Resultado: false
*/



// Utilizando if e else ﹌﹌﹌﹌﹌﹌﹌﹌

/*
const idade = 17;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
*/

// Utilizando else if ﹌﹌﹌﹌﹌﹌﹌﹌

/*
const nota = 7;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
*/

// criando formulário 

const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nomeAluno = nome.value.trim();
    const idadeAluno = Number(idade.value);

    if (nomeAluno === "" || idadeAluno <= 0) {
        resultado.textContent = "Preencha os dados corretamente.";
        return;
    }

    if (idadeAluno >= 18) {
        resultado.textContent =
            "Cadastro de " + nomeAluno + ": maior de idade.";
    } else {
        resultado.textContent =
            "Cadastro de " + nomeAluno + ": menor de idade.";
    }
});