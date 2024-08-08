let metaLivro = 8;
let livrosLidos = ["Casos de Família", "Lady Killers", "Serial killers - Anatomia do Mal", "Textos Cruéis Demais Para Serem Lidos Rapidamente", "Textos para tocar cicatrizes", "A bruxa não vai para a fogueira neste livro", "Jesus não é quem você pensa"];
console.log("Livros lidos esse mês: ")
for (let i = 0; i < livrosLidos.length; i++) {
    console.log(` 📘 | ${livrosLidos[i]}`);
} 
if (livrosLidos.length >= metaLivro) {
    console.log("Parabéns! Você atingiu sua meta de leitura!😃🎉")

} else {
            console.log (`Você está progredindo! Faltam ${metaLivro - livrosLidos.length} livros para atingir sua meta.`);
        }
 