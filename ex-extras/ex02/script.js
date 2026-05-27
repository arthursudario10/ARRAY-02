let inicio = parseFloat(prompt("Digite o valor inicial:"));
let fim = parseFloat(prompt("Digite o valor final:"));
let incremento = parseFloat(prompt("Digite o incremento:"));

if(incremento == 0) {
    alert("O incremento não pode ser zero!\nDigite outro incremento");
} else {
    let mensagem = "";

    if(inicio < fim) {
        for (let i = inicio; i <= fim; i += incremento) {
            mensagem = mensagem + i + "\n";
        }
    }
    else {
        for (let i = inicio; i >= fim; i -= incremento) {
            mensagem = mensagem + i + "\n";
        }
    }
    alert(mensagem);
}