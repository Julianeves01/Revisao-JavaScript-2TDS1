let armas = ["Canhão", "Gelo Agachando", "Lâminas de Carbono"]
let ataques = [];
ataques.push("Caramelo")
ataques.push(armas[1]);
ataques.push(armas [2]);
ataques.push(armas[5]);
ataques.push(armas [0]);
for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log (`Nome do Robô: ${ataques [i]}`);
    }else{
        console.log(`Ataque ${i}: ${ataques[i]}`);
    }
};