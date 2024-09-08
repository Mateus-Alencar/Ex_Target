function contarLetraA(s) {
    return (s.match(/a/gi) || []).length;
}

const texto = prompt("Digite uma string para contar as ocorrências da letra 'a':");

const quantidade = contarLetraA(texto);
console.log(`A letra 'a' aparece ${quantidade} vezes na string.`);