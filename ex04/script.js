let numeros = [];
let semDuplicados = [];
let tamanho = 0;

for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}
for (let i = 0; i < 10; i++) {
    let repetido = false;

    for (let j = 0; j < tamanho; j++) {
        if (numeros[i]  === semDuplicados[j]) {
        repetido = true;
        }
    }
    if (repetido === false) {
        semDuplicados[tamanho] = numeros[i];
        tamanho++;
    }
}
let textoOriginal = "";

for (let i = 0; i < 10; i++) {
    textoOriginal = textoOriginal + numeros[i] + " ";

}
let textoSemDuplicados = "";

for (let i = 0; i < tamanho; i++) {
    textoSemDuplicados = textoSemDuplicados + semDuplicados[i] + " ";
}
alert("Vetor original: " + textoOriginal);
alert("Vetor sem duplicados: " + textoSemDuplicados);

