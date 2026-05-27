let numeros = [];

for (let i = 0; i < 7; i++) {
    numeros[i] = Math.floor(Math.random() * 100);
}
let texto = "";

for (let i = 0; i < 7; i++) {
    texto = texto + numeros[i] + " ";
}
alert("Números gerados: " + texto);