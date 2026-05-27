let numeros = [];
let somaPares = 0;

for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt("Digite um número inteiro:"));
}
for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares = somaPares + numeros[i];
    }
}
let texto = "";

for (let i = 0; i < 10; i++) {
    texto = texto + numeros[i] + " ";
}
alert("Números digitados: " + texto);
alert("Soma dos números pares: " + somaPares);
