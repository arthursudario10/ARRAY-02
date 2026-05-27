let contagem = "";

for (let i = 30; i > 0; i--) {
    if (i % 4 === 0) {
        contagem += ( `[${i}] `);
    }
    else {
        contagem += (` ${i} `);
    }
}
alert(`${contagem}`);
