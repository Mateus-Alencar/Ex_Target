
function proximoImpar(seq) {
    const ultimo = seq[seq.length - 1];
    return ultimo + 2;
}

function proximoPotenciaDe2(seq) {
    const ultimo = seq[seq.length - 1];
    return ultimo * 2;
}

function proximoQuadradoPerfeito(seq) {
    const ultimo = seq[seq.length - 1];
    const raiz = Math.sqrt(ultimo);
    return (raiz + 1) ** 2;
}

function proximoQuadradoPerfeito2(seq) {
    const ultimo = seq[seq.length - 1];
    const raiz = Math.sqrt(ultimo);
    return (raiz + 2) ** 2;
}

function proximoFibonacci(seq) {
    const len = seq.length;
    return seq[len - 1] + seq[len - 2];
}

function proximoSequenciaPadrão(seq) {
    const ultimo = seq[seq.length - 1];
    const penultimo = seq[seq.length - 2];
    if (ultimo - penultimo === 1) {
        return ultimo + 1;
    }
    return ultimo + 2;
}

const sequenciaA = [1, 3, 5, 7];
const sequenciaB = [2, 4, 8, 16, 32, 64];
const sequenciaC = [0, 1, 4, 9, 16, 25, 36];
const sequenciaD = [4, 16, 36, 64];
const sequenciaE = [1, 1, 2, 3, 5, 8];
const sequenciaF = [2, 10, 12, 16, 17, 18, 19];

const proximoA = proximoImpar(sequenciaA);
const proximoB = proximoPotenciaDe2(sequenciaB);
const proximoC = proximoQuadradoPerfeito(sequenciaC);
const proximoD = proximoQuadradoPerfeito2(sequenciaD);
const proximoE = proximoFibonacci(sequenciaE);
const proximoF = proximoSequenciaPadrão(sequenciaF);

console.log(`a) Próximo elemento: ${proximoA}`);
console.log(`b) Próximo elemento: ${proximoB}`);
console.log(`c) Próximo elemento: ${proximoC}`);
console.log(`d) Próximo elemento: ${proximoD}`);
console.log(`e) Próximo elemento: ${proximoE}`);
console.log(`f) Próximo elemento: ${proximoF}`);
