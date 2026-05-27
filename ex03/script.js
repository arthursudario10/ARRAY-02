let numeros = [];
let contador = 0;

for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt("Digite um número inteiro:"));
}
let numeroBusca = Number(prompt("Digite um número para procurar no vetor"));

for (let i = 0; i < 10; i++) {
    if (numeros[i]  === numeroBusca) {
        contador++;
    }
}
alert(" O número " + numeroBusca + " aparece " + contador + " vez(es) no vetor. ");